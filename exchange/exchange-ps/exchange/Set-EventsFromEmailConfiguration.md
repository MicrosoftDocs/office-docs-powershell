---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-eventsfromemailconfiguration
applicable: Exchange Online
title: Set-EventsFromEmailConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-EventsFromEmailConfiguration

## SYNOPSIS
This cmdlet is only available in the cloud-based service.

Use the Set-EventsFromEmailConfiguration cmdlet to modify the events from email settings on a mailbox. on Outlook clients and Outlook on the web. These settings define whether Outlook or Outlook on the web (formerly known as Outlook Web App) automatically discovers events from email messages and adds them to the user's calendar.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Set-EventsFromEmailConfiguration [-Identity] <RecipientIdParameter>
 [-CreateEventsFromEmailAsPrivate <Boolean>]
 [-EventReservationProcessingLevel <String>]
 [-FlightReservationProcessingLevel <String>]
 [-FoodEstablishmentReservationProcessingLevel <String>]
 [-InvoiceProcessingLevel <String>]
 [-LodgingReservationProcessingLevel <String>]
 [-ParcelDeliveryProcessingLevel <String>]
 [-RentalCarReservationProcessingLevel <String>]
 [-ServiceReservationProcessingLevel <String>]
 [<CommonParameters>]
```

### ResetSettings
```
Set-EventsFromEmailConfiguration [-Identity] <RecipientIdParameter>
 [-ResetSettings]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-EventsFromEmailConfiguration -Identity peter@contoso.com -InvoiceProgressingLevel Disabled
```

This example disables the discovery of invoices from messages for the user.

### Example 2
```powershell
Set-EventsFromEmailConfiguration -Identity peter@contoso.com -ServiceReservationProcessingLevel Calendar -CreateEventsFromEmailAsPrivate $true
```

This example enables the discovery of service reservations, automatically adds them to the user's calendar, and makes these automatically added events private.

### Example 3
```powershell
Set-EventsFromEmailConfiguration -Identity peter@contoso.com -ResetSettings
```

This example resets Events from Email settings for the user.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You identify the mailbox by email address.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CreateEventsFromEmailAsPrivate
The CreateEventsFromEmailAsPrivate parameter specifies whether to create the events discovered from messages as normal or private events. Valid values are:

- $true: The events are crated as private events. This is the default value.

- $false: The events are created as normal events.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventReservationProcessingLevel
The EventReservationProcessingLevel parameter specifies whether event reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover event reservations from messages.

- Email: Discover event reservations from messages, but don't automatically add them to the user's calendar.

- Calendar: Discover event reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FlightReservationProcessingLevel
The FlightReservationProcessingLevel parameter specifies whether flight reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover flight reservations from messages.

- Email: Discover flight reservations from messages, but don't automatically add them to the user's calendar.

- Calendar: Discover flight reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FoodEstablishmentReservationProcessingLevel
The FoodEstablishmentProcessingLevel parameter specifies whether dining reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover restaurant reservations from messages.

- Email: Discover restaurant reservations from messages however do not automatically add these to the user's calendar.

- Calendar: Discover restaurant reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InvoiceProcessingLevel
The InvoiceProcessingLevel parameter specifies whether invoices are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover invoices from messages.

- Email: Discover invoices from messages however do not automatically add these to the user's calendar.

- Calendar: Discover invoices from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LodgingReservationProcessingLevel
The LodgingReservationProcessingLevel parameter specifies whether lodging reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover lodging reservations from messages.

- Email: Discover lodging reservations from messages however do not automatically add these to the user's calendar.

- Calendar: Discover lodging reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParcelDeliveryProcessingLevel
The ParcelDeliveryProcessingLevel parameter specifies whether parcel deliveries are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover parcel deliveries from messages.

- Email: Discover parcel deliveries from messages however do not automatically add these to the user's calendar.

- Calendar: Discover parcel deliveries from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RentalCarReservationProcessingLevel
The RentalCarReservationProcessingLevel parameter specifies whether rental car reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover rental car reservations from messages.

- Email: Discover rental car reservations from messages, but don't automatically add them to the user's calendar.

- Calendar: Discover rental car reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetSettings
The ResetSettings switch specifies whether to return all of the reservation discovery settings to their default values. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ResetSettings
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceReservationProcessingLevel
The ServiceReservationProcessingLevel parameter specifies whether service reservations are automatically discovered from messages, and whether these reservations are automatically added to the user's calendar. Valid values are:

- Disabled: Do not discover service reservations from messages.

- Email: Discover service reservations from messages, but don't automatically add them to the user's calendar.

- Calendar: Discover service reservations from messages and automatically add them to the user's calendar. This is the default value.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
