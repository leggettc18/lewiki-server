import { text } from "express";
import { Page } from "../entities/Page";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver()
export class PageResolver {
  @Query(() => [Page])
  pages(@Ctx() { em }: MyContext): Promise<Page[]> {
    return em.find(Page, {});
  }

  @Query(() => Page, { nullable: true })
  page(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<Page | null> {
    return em.findOne(Page, { id });
  }
}
