(ns uikit-hl.heading
  (:require [hoplon.core :as hl]))

(defmethod hl/do! :uk-heading-primary
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-heading-primary v}))

(defmethod hl/do! :uk-heading-hero
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-heading-hero v}))

(defmethod hl/do! :uk-heading-divider
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-heading-divider v}))

(defmethod hl/do! :uk-heading-bullet
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-heading-bullet v}))

(defmethod hl/do! :uk-heading-line
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-heading-line v}))

(hl/defelem heading [attr kids]
  (let [primary (:primary attr)
        hero    (:hero    attr)
        divider (:divider attr)
        bullet  (:bullet  attr)
        line    (:line    attr)
        attr    (dissoc attr :uk-heading-primary :uk-heading-hero :uk-heading-divider
                             :uk-heading-bullet :uk-heading-line)]
    (hl/h1
      attr
      :uk-heading-primary primary
      :uk-heading-hero    hero
      :uk-heading-divider divider
      :uk-heading-bullet  bullet
      :uk-heading-line    line
      kids)))
