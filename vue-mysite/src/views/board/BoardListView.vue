<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">

                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li class="last">일반게시판</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="board">
                        <div id="list">
                            <form action="" method="">
                                <div class="form-group text-right">
                                    <input type="text">
                                    <button type="submit" id=btn_search>검색</button>
                                </div>
                            </form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>글쓴이</th>
                                        <th>조회수</th>
                                        <th>작성일</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123</td>
                                        <td class="text-left"><a href="#">게시판 게시글입니다.</a></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td class="text-left"><a href="#">게시판 게시글입니다.</a></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td class="text-left"><a href="#">게시판 게시글입니다.</a></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td class="text-left"><a href="#">게시판 게시글입니다.</a></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                    <tr class="last">
                                        <td>123</td>
                                        <td class="text-left"><a href="#">게시판 게시글입니다.</a></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div id="paging">
                                <ul>
                                    <li><a href="">◀</a></li>
                                    <li><a href="">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">4</a></li>
                                    <li class="active"><a href="">5</a></li>
                                    <li><a href="">6</a></li>
                                    <li><a href="">7</a></li>
                                    <li><a href="">8</a></li>
                                    <li><a href="">9</a></li>
                                    <li><a href="">10</a></li>
                                    <li><a href="">▶</a></li>
                                </ul>


                                <div class="clear"></div>
                            </div>
                            <a id="btn_write" href="">글쓰기</a>

                        </div>
                        <!-- //list -->
                    </div>
                    <!-- //board -->
                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->


            <AppFooter />
            <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
</template>

<script>
import "@/assets/css/board.css"
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"


export default {
    name: "BoardListView",
    components: {
        AppFooter, AppHeader 
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>