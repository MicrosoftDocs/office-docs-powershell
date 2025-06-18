---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/invoke-holdremovalaction
applicable: Security & Compliance
title: Invoke-HoldRemovalAction
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Invoke-HoldRemovalAction

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Invoke-HoldRemovalAction cmdlet to view and remove holds on mailboxes and SharePoint sites. You can also see holds that were previously removed by using this cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Invoke-HoldRemovalAction -Action <HoldRemovalActionType>
 [-Confirm]
 [-ExchangeLocation <String>]
 [-Force]
 [-HoldId <String>]
 [-SharePointLocation <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. Only Compliance Administrator can remove hold for Exchange or Sharepoint locations. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-HoldRemovalAction -Action RemoveHold -ExchangeLocation "KittyPetersen@contoso.onmicrosoft.com" -HoldId "UniHecbf89df-74fc-444a-a2dc-c0756c7d3503"
```

This example removes the specified hold on Kitty Petersen's mailbox if policy UniHecbf89df-74fc-444a-a2dc-c0756c7d3503 is not an active case hold policy.

### Example 2
```powershell
Invoke-HoldRemovalAction -Action GetHolds -SharePointLocation "https://contoso.sharepoint.com/sites/finance"
```

This example displays all hold information on the specified SharePoint site.

### Example 3
```powershell
Invoke-HoldRemovalAction -Action GetHoldRemovals
```

This example displays all hold removals that have been done using this cmdlet.

## PARAMETERS

### -Action
The Action parameter specifies the mode that the cmdlet operates in. Valid values are:

- GetHoldRemovals: Shows all hold removals that were done using this cmdlet.
- GetHolds: Shows holds on the specified mailbox (the ExchangeLocation parameter) or SharePoint site (the SharePointLocation parameter).
- RemoveHold: Removes the specified hold (the HoldId parameter) from the specified mailbox (the ExchangeLocation parameter) or SharePoint site (the SharePointLocation parameter).

```yaml
Type: HoldRemovalActionType
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocation
The ExchangeLocation parameter specifies the email address of the mailbox that contains the holds to view or remove.

This parameter is required when you use the value GetHolds or RemoveHold for the Action parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to force remove the hold even when the policy is active. Instead, you should remove the hold from the case hold policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldId
The HoldId parameter specifies the hold that you want to view or remove.

To find valid values for this parameter, use this cmdlet with the Action parameter value GetHolds and look for the HoldId property in the output.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocation
The SharePointLocation parameter specifies the URL of the SharePoint site that contains the holds to view or remove.

This parameter is required when you use the value GetHolds or RemoveHold for the Action parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
