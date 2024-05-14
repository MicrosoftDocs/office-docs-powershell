---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/enable-pushnotificationproxy
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Enable-PushNotificationProxy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Enable-PushNotificationProxy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Enable-PushNotificationProxy cmdlet to enable a push notification proxy between an on-premises Microsoft Exchange organization and a Microsoft 365 organization.

In order for event notifications to be successfully delivered, you also need to configure OAuth authentication between your on-premises Exchange organization and your Microsoft 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Enable-PushNotificationProxy [-Confirm]
 [-Organization <String>]
 [-Uri <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The push notification proxy relays event notifications (for example, new email or calendar updates) for on-premises mailboxes through Microsoft 365 to Outlook on the web for devices on the user's device.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-PushNotificationProxy -WhatIf
```

This example displays the status of the push notification proxy in the on-premises Exchange organization.

### Example 2
```powershell
Enable-PushNotificationProxy -Organization contoso.onmicrosoft.com
```

This example enables the push notification proxy in the on-premises Exchange organization by using the Microsoft 365 organization contoso.onmicrosoft.com.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
The Organization parameter specifies the domain name of the Microsoft 365 organization. For example, contoso.onmicrosoft.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
The Uri parameter specifies the push notification service endpoint in Microsoft 365. The default value is <https://outlook.office365.com/PushNotifications>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
