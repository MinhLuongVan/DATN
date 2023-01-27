<template>
  <div>
    <div class="lg:px-52 lg:border-t-0 border-t-2 mt-3 lg:mt-8">
      <div class="intro-y flex mt-3 lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Quy định và Điều khoản</h2>
      </div>
      <!-- BEGIN: Page Transport -->
      <div class="intro-y py-3">
        <h1 class="lg:text-3xl text-2xl lg:mt-4 mt-2 font-medium">
          Quy định và Điều khoản
        </h1>
        <p class="mt-2 text-lg lg:text-base">
          Chào mừng quý khách đến với Fresh-Garden.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          Khi quý khách truy cập vào trang web của chúng tôi có nghĩa là quý
          khách đồng ý với các điều khoản này. Trang web có quyền thay đổi,
          chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và Điều
          kiện sử dụng, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi
          được đăng trên trang web mà không cần thông báo trước. Và khi quý
          khách tiếp tục sử dụng trang web, sau khi các thay đổi về Quy định và
          Điều kiện được đăng tải, có nghĩa là quý khách chấp nhận với những
          thay đổi đó. Quý khách vui lòng kiểm tra thường xuyên để cập nhật
          những thay đổi của chúng tôi.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          Xin vui lòng đọc kỹ trước khi quyết định mua hàng:
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          1. HƯỚNG DẪN SỬ DỤNG WEB
        </h2>
        <p class="mt-2 text-lg lg:text-base">
          - Khi vào web của chúng tôi, người dùng tối thiểu phải 18 tuổi hoặc
          truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          - Chúng tôi cấp giấy phép sử dụng để bạn có thể mua sắm trên web trong
          khuôn khổ Điều khoản và Điều kiện sử dụng đã đề ra.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          - Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích
          thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được
          chúng tôi cho phép bằng văn bản. Nếu vi phạm bất cứ điều nào trong
          đây, chúng tôi sẽ hủy giấy phép của bạn mà không cần báo trước.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          - Trang web này chỉ dùng để cung cấp thông tin sản phẩm chứ chúng tôi
          không phải nhà sản xuất nên những nhận xét hiển thị trên web là ý kiến
          cá nhân của khách hàng, không phải của chúng tôi.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          - Quý khách phải đăng ký tài khoản với thông tin xác thực về bản thân
          và phải cập nhật nếu có bất kỳ thay đổi nào. Mỗi người truy cập phải
          có trách nhiệm với mật khẩu, tài khoản và hoạt động của mình trên web.
          Hơn nữa, quý khách phải thông báo cho chúng tôi biết khi tài khoản bị
          truy cập trái phép. Chúng tôi không chịu bất kỳ trách nhiệm nào, dù
          trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra
          do quý khách không tuân thủ quy định.
        </p>
        <p class="mt-2 text-lg lg:text-base">
          - Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo
          từ website. Sau đó, nếu không muốn tiếp tục nhận mail, quý khách có
          thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email
          quảng cáo.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          2. Ý KIẾN KHÁCH HÀNG
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Tất cả nội dung trang web và ý kiến phê bình của quý khách đều là
          tài sản của chúng tôi. Nếu chúng tôi phát hiện bất kỳ thông tin giả
          mạo nào, chúng tôi sẽ khóa tài khoản của quý khách ngay lập tức hoặc
          áp dụng các biện pháp khác theo quy định của pháp luật Việt Nam
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          3 ĐẶT HÀNG VÀ XÁC NHẬN ĐƠN HÀNG
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Khi quý khách đặt hàng tại Fresh-Garden, chúng tôi sẽ nhận được yêu
          cầu đặt hàng và gửi đến quý khách mã số đơn hàng. Tuy nhiên, yêu cầu
          đặt hàng cần thông qua một bước xác nhận đơn hàng, Fresh-Garden chỉ
          xác nhận đơn hàng nếu yêu cầu đặt hàng của quý khách thỏa mãn các tiêu
          chí thực hiện đơn hàng tại Fresh-Garden.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Để yêu cầu đặt hàng được xác nhận nhanh chóng, quý khách vui lòng
          cung cấp đúng và đầy đủ các thông tin liên quan đến việc giao nhận,
          hoặc các điều khoản và điều kiện của chương trình khuyến mãi (nếu có)
          mà quý khách tham gia.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          4. GIÁ TRỊ ĐƠN HÀNG VÀ HÌNH THỨC THANH TOÁN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden cung cấp các hình thức thanh toán: tiền mặt khi nhận
          hàng, thẻ Thanh toán Quốc tế hoặc thẻ Thanh toán Nội địa.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Trừ một số trường hợp có ghi chú riêng, thông thường quý khách có
          thể lựa chọn một trong 3 hình thức thanh toán trên khi tiến hành đặt
          hàng. Tuy nhiên, để đảm bảo tính an toàn dành cho quý khách trong quá
          trình thanh toán, đối những đơn hàng có giá trị cao từ 30 (ba mươi)
          triệu trở lên, Fresh-Garden chỉ chấp nhận hình thức thanh toán trước
          bằng thẻ Thanh toán Quốc tế hoặc thẻ Thanh toán Nội địa.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          5. CHƯƠNG TRÌNH KHUYẾN MÃI
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Với mong muốn mang lại nhiều lợi ích cho khách hàng, Fresh-Garden
          cùng các Thương nhân thành viên thường xuyên có các chương trình giảm
          giá đặc biệt. Tuy nhiên, để đảm bảo tính công bằng cho khách hàng là
          người tiêu dùng cuối cùng của Fresh-Garden, chúng tôi có quyền từ chối
          các đơn hàng không nhằm mục đích sử dụng cho cá nhân, mua hàng số
          lượng nhiều hoặc với mục đích mua đi bán lại khi quý khách tham gia
          các chương trình khuyến mãi.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Thông thường, số lượng sản phẩm tối đa dành cho mỗi khách hàng khi
          tham gia chương trình khuyến mãi đặc biệt tại Fresh-Garden là hai (02)
          sản phẩm. Thể lệ của chương trình khuyến mãi sẽ được cập nhật tại
          trang khuyến mãi theo từng thời điểm chạy chương trình và có thể được
          thay đổi mà không cần thông báo trước cho khách hàng.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden có quyền từ chối các đơn hàng không thỏa mãn điều khoản
          và điều kiện tham gia các chương trình khuyến mãi mà không cần thông
          báo đến khách hàng. Vì vậy, xin quý khách vui lòng tham khảo kĩ Thể lệ
          của từng chương trình trước khi tham gia.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          6. MÃ GIẢM GIÁ
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Mã giảm giá là hình thức chiết khấu màFresh-Garden dành cho khách
          hàng có thể có giá trị giảm một phần hoặc toàn phần giá trị của đơn
          hàng.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Mỗi đơn hàng chỉ có thể áp dụng 1 mã giảm giá, quý khách sẽ nhận
          được thông tin chi tiết về điều khoản và điều kiện sử dụng mã giảm giá
          kèm theo. Để đảm bảo tính công bằng cho khách hàng là người tiêu dùng
          cuối cùng của Fresh-Garden, chúng tôi có quyền từ chối các đơn hàng
          không nhằm mục đích sử dụng cho cá nhân, mua hàng số lượng nhiều hoặc
          với mục đích mua đi bán lại.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden có quyền từ chối các đơn hàng sử dụng mã giảm giá không
          thỏa mãn điều khoản và điều kiện sử dụng mã giảm gía mà không cần
          thông báo trước. Mã giảm giá trong trường hợp này sẽ không được cấp
          lại. Ngoài ra, Fresh-Garden có quyền từ chối việc gia hạn mã đã hết
          hạn sử dụng, mã không được sử dụng hết giá trị hoặc các trường hợp đơn
          phương ngừng thược hiện đơn hàng phát sinh từ phía quý khách.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          7. KHU VỰC GIAO HÀNG
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden giao hàng toàn quốc đối với các sản phẩm do chính
          Fresh-Garden phân phối, trừ các mặt hàng điện lạnh như máy lạnh, máy
          giặt, tủ lạnh, tủ đông v.v… và một số mặt hàng khác nếu quá trình vận
          chuyển có thể làm ảnh hưởng đến chất lượng sản phẩm hoặc sức khỏe
          khách hàng.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Đối với sản phẩm do các đơn vị Thương nhân thành viên phân phối, khu
          vực giao hàng có thể sẽ được giới hạn theo thông cập nhật tại trang
          sản phẩm. Trong một số trường hợp, mà khu vực giao hàng không được cập
          nhật kịp thời tại thời điểm quý khách đặt hàng, Fresh-Garden sẽ liên
          hệ đến quý khách để thông báo chi tiết.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">8. GIÁ CẢ</h2>
        <p class="mt-3 text-lg lg:text-base">
          - Giá cả sản phẩm được niêm yết tại Fresh-Garden là giá bán cuối cùng
          đã bao gồm thuế Giá trị gia tăng (VAT). Giá cả của sản phẩm có thể
          thay đổi tùy thời điểm và chương trình khuyến mãi kèm theo. Phí vận
          chuyển hoặc Phí thực hiện đơn hàng sẽ được áp dụng thêm nếu có, và sẽ
          được hiển thị rõ tại trang Thanh toán khi quý khách tiến hành đặt
          hàng.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Mặc dù chúng tôi cố gắng tốt nhất để bảo đảm rằng tất cả các thông
          tin và giá hiển thị là chính xác đối với từng sản phẩm, đôi khi sẽ có
          một số trường hợp bị lỗi hoặc sai sót. Nếu chúng tôi phát hiện lỗi về
          giá của bất kỳ sản phẩm nào trong đơn hàng của quý khách, chúng tôi sẽ
          thông báo cho quý khách trong thời gian sớm nhất có thể và gửi đến quý
          khách lựa chọn để xác nhận lại đơn hàng với giá chính xác hoặc hủy đơn
          hàng. Nếu chúng tôi không thể liên lạc với quý khách, đơn hàng sẽ tự
          động hủy trên hệ thống và lệnh hoàn tiền sẽ được thực hiện (nếu đơn
          hàng đã được thanh toán trước).
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Khác biệt giá: Các Thương nhân thành viên hoạt động tại sàn giao
          dịch Thương mại điện tử Fresh-Garden có thể cùng cung cấp 1 sản phẩm
          giống nhau với chính sách giá khác nhau, Quý khách có quyền lựa chọn
          và so sánh giá cả giữa các thương nhân thành viên để có được mức giá
          hợp lý nhất cho yêu cầu đặt hàng của mình. Fresh-Garden không can
          thiệp về chính sách giá của từng Thương nhân thành viên nếu có phát
          sinh tranh chấp.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          9. THÔNG TIN SẢN PHẨM
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden cung cấp thông tin chi tiết đối với từng sản phẩm mà
          chúng tôi đăng tải, tuy nhiên chúng tôi không thể cam kết cung cấp
          thông tin đầy đủ một cách chính xác, toàn vẹn, cập nhật, và không sai
          sót đối với từng sản phẩm.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Trong trường hợp sản phẩm quý khách nhận được không đúng như những
          gì Fresh-Garden đã mô tả trong phần thông tin sản phẩm, quý khách vui
          lòng thông tin đến bộ phận Hỗ trợ khách hàng trong thời gian sớm nhất
          kể từ khi nhận hàng đồng thời đảm bảo sản phẩm trong tình trạng chưa
          qua sử dụng để được hỗ trợ đổi trả. Thông tin chi tiết về chính sách
          đổi trả vui lòng tham khảo tại:
          http://www.Fresh-Garden/chinh-sach-doi-tra-hang/
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          10. CHÍNH SÁCH VỀ HÀNG GIẢ, HÀNG NHÁI, HÀNG KHÔNG ĐÚNG CHẤT LƯỢNG
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Fresh-Garden hướng đến việc cung cấp hàng hóa và chất lượng dịch vụ
          tốt nhất cho khách hàng qua các sản phẩm được đăng bán trên trang web
          của chúng và từ chối bán các sản phẩm sản xuất trái phép, sao chép,
          hàng giả, hàng nhái, không rõ nguồn gốc xuất xứ...
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Các Thương nhân thành viên của Fresh-Garden đều được yêu cầu thực
          hiện một cách nghiêm túc đối với việc đảm bảo chất lượng và nguồn gốc,
          xuất xứ của sản phẩm, cũng như tự chịu trách nhiệm trước pháp luật đối
          với các hành vi vi phạm. Đối với các trường hợp phát hiện sản phẩm sản
          xuất trái phép, sao chép, hàng giả, hàng nhái, không rõ nguồn gốc xuất
          xứ..., Fresh-Garden sẽ ngay lập tức đình chỉ hoặc chấm dứt quyền bán
          hàng và thực hiện các biện pháp chế tài đối với đơn vị Thương nhân
          thành viên vi phạm.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Trong trường hợp quý khách có nghi ngờ sản phẩm sản xuất trái phép,
          sao chép, hàng giả, hàng nhái, không rõ nguồn gốc xuất xứ..., vui lòng
          thông báo ngay cho chúng tôi bằng cách liên hệ với Bộ phận Hỗ trợ
          khách hàng tại www.Fresh-Garden/contact/ để được xác thực thông tin và
          hỗ trợ.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          11. THƯƠNG HIỆU VÀ BẢN QUYỀN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung
          thông tin và tất cả các thiết kế, văn bản, đồ họa, phần mềm, hình ảnh,
          video, âm nhạc, âm thanh, biên dịch phần mềm, mã nguồn và phần mềm cơ
          bản đều là tài sản của chúng tôi. Toàn bộ nội dung của trang web được
          bảo vệ bởi luật bản quyền của Việt Nam và các công ước quốc tế. Bản
          quyền đã được bảo lưu.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          12. QUYỀN PHÁP LÝ
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Các điều kiện, điều khoản và nội dung của trang web này được điều
          chỉnh bởi luật pháp Việt Nam và Tòa án có thẩm quyền tại Việt Nam sẽ
          giải quyết bất kỳ tranh chấp nào phát sinh từ việc sử dụng trái phép
          trang web này.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          13. QUY ĐỊNH VỀ BẢO MẬT
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng
          các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của quý
          khách. Thông tin của quý khách trong quá trình thanh toán sẽ được mã
          hóa để đảm bảo an toàn. Sau khi quý khách hoàn thành quá trình đặt
          hàng, quý khách sẽ thoát khỏi chế độ an toàn.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Quý khách không được sử dụng bất kỳ chương trình, công cụ hay hình
          thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ
          liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho
          bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu
          của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi
          cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan
          pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này
          cho các cơ quan pháp luật.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          14. THANH TOÁN AN TOÀN VÀ TIỆN LỢI Fresh-Garden
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          Mọi khách hàng tham giao giao dịch tại Fresh-Garden qua thẻ tín dụng
          quốc tế đều được bảo mật thông tin bằng mã hóa (xem chi tiết tại điều
          khoản “Quy định về bảo mật” được nêu ở trên). Qua đó, khi thực hiện
          thanh toán qua mạng quý khách lưu ý các chi tiết sau:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Chỉ sử dụng trang web có chứng chỉ thanh toán an toàn.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Tuyệt đối không cho người khác mượn thẻ tín dụng hoặc tài khoản của
          mình để thực hiện thanh toán tại Fresh-Garden; trong trường hợp phát
          sinh giao dịch ngoài ý muốn, quý khách vui lòng thông báo cho
          Fresh-Garden biết để có thể hỗ trợ kịp thời.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Kiểm tra tài khoản ngân hàng của mình thường xuyên để đảm bảo tất cả
          giao dịch qua thẻ đều nằm trong tầm kiểm soát.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          15. GIAO KẾT GIAO DỊCH TẠI FRESH-GARDEN
        </h2>
        <p class="mt-3 mb-3 text-lg lg:text-base">
          - Khách hàng khi mua sắm tại Fresh-Garden phải thực hiện các thao tác
          đặt hàng và nhận hàng theo trình tự sau:
        </p>
        <u class=" text-lg lg:text-base">
          Cách 1: Thanh toán trước online qua thẻ tín dụng (Visa, Master
          card..):
        </u>
        <p class="mt-3 text-lg lg:text-base">
          Bước 1: Khách hàng đặt hàng, cung cấp thông tin đầy đủ, xác thực
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 2: Khách hàng thanh toán trước;
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 3: Fresh-Garden kiểm tra, xác nhận đơn hàng và chuyển hàng;
        </p>
        <p class="mt-3 mb-3 text-lg lg:text-base">
          Bước 4: Khách hàng kiểm tra và nhận hàng;
        </p>
        <u class="mt-3 text-lg lg:text-base">Cách 2: Thanh toán sau:</u>
        <p class="mt-3 text-lg lg:text-base">
          Bước 1: Khách hàng đặt hàng, cung cấp thông tin đầy đủ, xác thực
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 2: Fresh-Garden xác thực đơn hàng
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 3: Fresh-Garden xác nhận thông tin khách hàng (điện thoại, tin
          nhắn, email)
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 4: Fresh-Garden chuyển hàng
        </p>
        <p class="mt-3 text-lg lg:text-base">
          Bước 5: Khách hàng nhận hàng và thanh toán
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Trong các trường hợp, khách hàng có thể tra cứu thông tin giao dịch
          qua email gửi vào hộp thư khách hàng đã đăng ký với Fresh-Garden hoặc
          tra cứu tình trạng giao dịch tại website
          http://www.Fresh-Garden/kiem-tra-don-hang/. Ngoài ra, khách hàng có
          thể tra cứu được lịch sử giao dịch khi đăng nhập vào tài khoản của
          mình tại website Fresh-Garden
        </p>
        <p class="mt-3 text-lg lg:text-base">
          - Trường hợp khách hàng muốn chỉnh sửa thông tin, khách hàng thông báo
          cho Fresh-Garden qua đường dây nóng 0363546789 hoặc ghi lời nhắn tại
          http://www.Fresh-Garden/introduce/contact/.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          16. THAY ĐỔI, HỦY BỎ GIAO DỊCH TẠI FRESH-GARDEN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Trong mọi trường hợp, khách hàng đều có quyền chấm dứt giao dịch nếu
          đã thực hiện các biện pháp sau đây:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          1. Thông báo cho Fresh-Garden về việc hủy giao dịch qua đường dây nóng
          0363546789 hoặc lời ghi nhắn tại
          http://www.Fresh-Garden/introduce/contact/.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          2. Trả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi
          ích nào từ hàng hóa đó (theo quy định của chính sách đổi trả hàng tại
          http://www.Fresh-Garden/chinh-sach-doi-tra-hang/)
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          17. GIẢI QUYẾT HẬU QUẢ DO LỖI NHẬP SAI THÔNG TIN THƯƠNG MẠI TẠI
          FRESH-GARDEN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Khách hàng có trách nhiệm cung cấp thông tin đầy đủ và chính xác khi
          tham gia giao dịch tại Fresh-Garden. Trong trường hợp khách hàng nhập
          sai thông tin gửi vào trang thông tin điện tử bán hàng Fresh-Garden,
          Fresh-Garden có quyền từ chối thực hiện giao dịch. Ngoài ra, trong mọi
          trường hợp, khách hàng đều có quyền đơn phương chấm dứt giao dịch nếu
          đã thực hiện các biện pháp sau đây:
        </p>
        <p class="mt-3 text-lg lg:text-base">
          1. Thông báo cho Fresh-Garden qua đường dây nóng 0363546789 hoặc lời
          nhập nhắn tại địa chỉ http://www.Fresh-Garden/introduce/contact/.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          2. Trả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi
          ích nào từ hàng hóa đó.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          18. GIẢI PHÁP TRANH CHẤP
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Bất kỳ tranh cãi, khiếu nại hoặc tranh chấp phát sinh từ hoặc liên
          quan đến giao dịch tại Fresh-Garden hoặc các Quy định và Điều kiện này
          đều sẽ được giải quyết bằng hình thức thương lượng, hòa giải, trọng
          tài và/hoặc Tòa án theo Luật bảo vệ Người tiêu dùng Chương 4 về Giải
          quyết tranh chấp giữa người tiêu dùng và tổ chức, cá nhân kinh doanh
          hàng hóa, dịch vụ.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          19. QUY ĐỊNH CHẤP DỨT THỎA THUẬN
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Trong trường hợp có bất kỳ thiệt hại nào phát sinh do việc vi phạm
          Quy Định sử dụng trang web, chúng tôi có quyền đình chỉ hoặc khóa tài
          khoản của quý khách vĩnh viễn. Nếu quý khách không hài lòng với trang
          web hoặc bất kỳ điều khoản, điều kiện, quy tắc, chính sách, hướng dẫn,
          hoặc cách thức vận hành của Fresh-Garden thì biện pháp khắc phục duy
          nhất là ngưng làm việc với chúng tôi.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-3 font-medium">
          20. NHỮNG QUY ĐỊNH KHÁC
        </h2>
        <p class="mt-3 text-lg lg:text-base">
          - Tất cả các Điều Khoản và Điều Kiện (và tất cả nghĩa vụ phát sinh
          ngoài Điều khoản và Điều kiện này hoặc có liên quan) sẽ bị chi phối và
          được hiểu theo luật pháp Việt Nam. Chúng tôi có quyền sửa đổi các Điều
          khoản và Điều kiện này vào bất kỳ thời điểm nào và các sửa đổi đó sẽ
          có hiệu lực ngay tại thời điểm được được đăng tải tại Fresh-Garden.
        </p>
      </div>
      <!-- END: Page Transport -->
    </div>
    <bottom />
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Introduce",
  components: { bottom },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style></style>
