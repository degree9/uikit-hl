(ns uikit-hl.search
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(defmethod hl/do! :uk-search
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-search v}))

(defmethod hl/do! :uk-search-large
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-search-large v}))

(defmethod hl/do! :uk-search-input
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-search-input v}))

(hl/defelem search [attr kids]
  (let [large (:large attr)]
    (hl/form attr :uk-search true :uk-search-large large kids)))

(hl/defelem input [attr kids]
  (hl/input attr :uk-search-input true :type "search" kids))
