(ns uikit-hl.table
  (:require [hoplon.core :as h]
            [javelin.core :as j]
            [uikit-hl.core :as core]))

(defmulti uk-table! h/kw-dispatcher :default ::default)

(defn format-table [grid]
  (str "uk-table-" grid))

(defmethod h/do! ::default
  [elem key val]
  (uk-table! elem key val))

(defmethod uk-table! ::default
  [elem key val]
  (h/do! elem :class {(format-table (name key)) val}))

(defmethod uk-table! ::table
  [elem _ v]
  (h/do! elem :class {:uk-table val}))

(h/defelem table
  [{:keys [caption headers body footers divider striped hover small justify middle responsive] :as attr} kids]
  (h/table
    (dissoc attr :caption :divider :striped :hover :small :justify :middle :responsive)
    ::table      true
    ::divider    divider
    ::striped    striped
    ::hover      hover
    ::small      small
    ::justify    justify
    ::middle     middle
    ::responsive responsive
    kids))

(def header  h/thead)
(def thead   h/thead)

(def body    h/tbody)
(def tbody   h/tbody)

(def footer  h/tfoot)
(def tfoot   h/tfoot)

(def row     h/tr)
(def tr      h/tr)

(def hcell   h/th)
(def th      h/th)

(def cell    h/td)
(def td      h/td)

(def caption h/caption)
