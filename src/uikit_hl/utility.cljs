(ns uikit-hl.utility
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-utility! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-utility! elem key val))

(defn- format-utility [utility]
  (str "uk-" utility))

(defmethod uk-utility! ::default
  [elem kw v]
  (h/do! elem :class {(format-utility (name kw)) v}))

(defmethod uk-utility! ::panel
  [elem kw v]
  (h/do! elem :class {:uk-panel v}))

(h/defelem panel [{:keys [scrollable] :as attr} kids]
  (h/div
    (dissoc attr :scrollable)
    ::panel true
    ::scrollable scrollable
    kids))
