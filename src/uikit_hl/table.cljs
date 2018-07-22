(ns uikit-hl.table
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [uikit-hl.core :as core]))

(def ^:dynamic *data* nil)

(def ^:dynamic *caption* nil)
(def ^:dynamic *headers* nil)
(def ^:dynamic *footers* nil)

(def ^:dynamic *divider* nil)
(def ^:dynamic *striped* nil)
(def ^:dynamic *hover*   nil)

(def ^:dynamic *small*   nil)
(def ^:dynamic *justify* nil)
(def ^:dynamic *middle*  nil)

(def ^:dynamic *responsive*  nil)

(hl/defelem table [attr kids]
  (let [caption (:caption attr *caption*)
        headers (:headers attr *headers*)
        body    (:data    attr (or *data* kids))
        footers (:footers attr *footers*)
        divider (:divider attr *divider*)
        striped (:striped attr *striped*)
        hover   (:hover   attr *hover*)
        small   (:small   attr *small*)
        justify (:justify attr *justify*)
        middle  (:middle  attr *middle*)
        responsive (:responsive attr *responsive*)
        attr (dissoc attr :caption :headers :data :footers :divider :striped
                          :hover :small :justify :middle)]
    (hl/table
      (core/assoc-class attr {:uk-table true
                              :uk-table-divider divider
                              :uk-table-striped striped
                              :uk-table-hover   hover
                              :uk-table-small   small
                              :uk-table-justify justify
                              :uk-table-middle  middle
                              :uk-table-responsive responsive})
      kids
      (hl/when-tpl caption (hl/caption caption))
      (hl/thead (hl/for-tpl [h headers] (hl/tr (hl/for-tpl [data (j/cell= h)] (hl/th data)))))
      (hl/tbody (hl/for-tpl [b body]    (hl/tr (hl/for-tpl [data (j/cell= b)] (hl/td data)))))
      (hl/tfoot (hl/for-tpl [f footers] (hl/tr (hl/for-tpl [data (j/cell= f)] (hl/td data))))))))
