---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/update-sitemailbox
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Update-SiteMailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Update-SiteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Update-SiteMailbox cmdlet to trigger a Microsoft SharePoint synchronization. This command synchronizes document content membership and permissions into Microsoft Exchange. You may need to perform this action when troubleshooting document or membership synchronization issues.

Site mailboxes were deprecated in Exchange Online and SharePoint Online in 2017. For more information, see [Deprecation of Site Mailboxes](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/deprecation-of-site-mailboxes/ba-p/93028).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-SiteMailbox [-Identity] <RecipientIdParameter>
 [-BypassOwnerCheck]
 [-Confirm]
 [-FullSync]
 [-Organization <OrganizationIdParameter>]
 [-Server <String>]
 [-Target <TargetType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you are running this command against a site mailbox in which you aren't the owner, you need to use the BypassOwnerCheck parameter to run this cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Update-SiteMailbox -BypassOwnerCheck -Identity "MarketingEvents 2013"
```

This example updates the site mailbox MarketingEvents 2013. If you don't specify the target, this triggers both document and membership synchronization. Because the BypassOwnerCheck parameter is used, it isn't necessary to be an owner or member of the site mailbox to run this cmdlet.

### Example 2
```powershell
Update-SiteMailbox -BypassOwnerCheck -Identity WinterHoliday@tailspintoys.com -FullSync
```

This example updates the site mailbox WinterHoliday@tailspintoys.com and performs a full synchronization. By default, the update only occurs for synchronization from the last synchronization. This is only applicable to document synchronization

## PARAMETERS

### -Identity
The Identity parameter specifies the site mailbox that you want to update. You can use any value that uniquely identifies the site mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassOwnerCheck
The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you don't use this switch, and you aren't a member or owner of the site mailbox, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullSync
The FullSync switch specifies full sync is expensive and will have a performance impact on the Exchange system. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the fully qualified domain name (FQDN) or the Microsoft SharePoint server on which the site mailbox is located.

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

### -Target
The Target parameter specifies whether to update the SharePoint documents, the site mailbox's membership list or both. This parameter accepts the following values:

- All
- Document
- Membership

If you don't specify this parameter when you run the cmdlet, this parameter value defaults to ALL.

```yaml
Type: TargetType
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
