(ns uikit-hl.link
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-link! h/kw-dispatcher :default ::default)

(defn format-link [link]
  (str "uk-link-" link))

(defmethod h/do! ::default
  [elem key val]
  (uk-link! elem key val))

(defmethod uk-link! ::default
  [elem key val]
  (elem :class {(format-link (name key)) val}))

(h/defelem link [{:keys [muted text heading reset] :as attr} kids]
  (h/a
    (dissoc attr :muted :text :heading :reset)
    ::muted   muted
    ::text    text
    ::heading heading
    ::reset   reset
    kids))
