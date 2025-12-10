---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-sitemailboxdiagnostics
schema: 2.0.0
title: Get-SiteMailboxDiagnostics
---

# Get-SiteMailboxDiagnostics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-SiteMailboxDiagnostics cmdlet to view important event-related data for each site mailbox. This information can be used to troubleshoot site mailbox issues.

Site mailboxes were deprecated in Exchange Online and SharePoint Online in 2017. For more information, see [Deprecation of Site Mailboxes](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/deprecation-of-site-mailboxes/ba-p/93028).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SiteMailboxDiagnostics [-Identity] <RecipientIdParameter>
 [-BypassOwnerCheck]
 [-Confirm]
 [-SendMeEmail]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you aren't a member or owner of the site mailbox that you want to view the diagnostics information for, you must use the BypassOwnerCheck parameter when running this cmdlet. If you aren't a member or owner of the site mailbox and you run this cmdlet without using the BypassOwnerCheck parameter, the command fails with an "object not found" error.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity "Marketing Events 2015"
```

This example returns the event information for the site mailbox by using its display name Marketing Events 2015.

### Example 2
```powershell
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity events2015@contoso.com -SendMeEmail
```

This example returns the event information for the Marketing Events 2015 site mailbox and sends an email to the primary SMTP address of the user running this command.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the site mailbox that you want to view. You can use any value that uniquely identifies the site mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassOwnerCheck

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you don't use this switch and you aren't a member or owner of the site mailbox, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendMeEmail

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendMeEmail switch specifies that the diagnostic information is sent to the primary SMTP email address of the user account that's running the command. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
