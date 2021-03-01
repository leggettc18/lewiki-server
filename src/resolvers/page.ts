import { Page } from "../entities/Page";
import { MyContext } from "src/types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PageResolver {
  @Query(() => [Page])
  pages(@Ctx() { em }: MyContext): Promise<Page[]> {
    return em.find(Page, {});
  }

  @Query(() => Page, { nullable: true })
  page(@Arg("id") id: number, @Ctx() { em }: MyContext): Promise<Page | null> {
    return em.findOne(Page, { id });
  }

  @Mutation(() => Page)
  async createPage(
    @Arg("title") title: string,
    @Ctx() { em }: MyContext
  ): Promise<Page> {
    const page = em.create(Page, { title: title });
    await em.persistAndFlush(page);
    return page;
  }

  @Mutation(() => Page, { nullable: true })
  async updatePage(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Page | null> {
    const page = await em.findOne(Page, { id });
    if (!page) {
      return null;
    }
    if (typeof title !== "undefined") {
      page.title = title;
      await em.persistAndFlush(page);
    }
    return page;
  }

  @Mutation(() => Boolean)
  async deletePage(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      await em.nativeDelete(Page, { id });
    } catch {
      return false;
    }
    return true;
  }
}
