(ns uikit-hl.flex
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-flex! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-flex! elem key val))

(defn- format-flex [flex]
  (str "uk-flex-" flex))

(defmethod uk-flex! ::default
  [elem kw v]
  (h/do! elem :class {(format-flex (name kw)) v}))

(defmethod uk-flex! ::flex
  [elem _ v]
  (h/do! elem :class {:uk-flex v}))
