---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-casmailboxplan
schema: 2.0.0
title: Set-CASMailboxPlan
---

# Set-CASMailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-CASMailboxPlan cmdlet to modify Client Access services (CAS) mailbox plans in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CASMailboxPlan [-Identity] <MailboxPlanIdParameter>
 [-ActiveSyncEnabled <Boolean>]
 [-Confirm]
 [-ECPEnabled <Boolean>]
 [-EwsEnabled <System.Int32>]
 [-ImapEnabled <Boolean>]
 [-MAPIEnabled <Boolean>]
 [-OWAEnabled <Boolean>]
 [-OwaMailboxPolicy <MailboxPolicyIdParameter>]
 [-PopEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
A CAS mailbox plan is tied to the corresponding mailbox plan that has the same name (and display name). Like mailbox plans, CAS mailbox plans correspond to license types, and are applied to a mailbox when you license the user. The availability of a CAS mailbox plan is determined by your selections when you enroll in the service and the age of your organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-CASMailboxPlan -Identity ExchangeOnlineEnterprise -ActiveSyncEnabled $false -PopEnabled $false
```

This example disables Exchange ActiveSync and POP3 access to mailboxes in the CAS mailbox plan named ExchangeOnlineEnterprise.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the CAS mailbox plan that you want to modify. You can use any value that uniquely identifies the CAS mailbox plan. For example:

- Name
- Distinguished name (DN)
- GUID

The display name and name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, `ExchangeOnlineEnterprise` and `ExchangeOnlineEnterprise-<GUID>`, respectively).

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncEnabled

> Applicable: Exchange Online, Exchange Online Protection

The ActiveSyncEnabled parameter enables or disables access to the mailbox by using Exchange Active Sync (EAS). Valid values are:

- $true: ActiveSync access to the mailbox is enabled. This is the default value.
- $false: ActiveSync access to the mailbox is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Exchange Online Protection

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

### -ECPEnabled

> Applicable: Exchange Online, Exchange Online Protection

{{ Fill ECPEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsEnabled

> Applicable: Exchange Online, Exchange Online Protection

{{ Fill EwsEnabled Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnabled

> Applicable: Exchange Online, Exchange Online Protection

The ImapEnabled parameter enables or disables access to the mailbox by using IMAP4 clients. Valid values are:

- $true: IMAP4 access to the mailbox is enabled. This is default value for all CAS mailbox plans except ExchangeOnlineDeskless.
- $false: IMAP4 access to the mailbox is disabled. This is default value for ExchangeOnlineDeskless.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIEnabled

> Applicable: Exchange Online, Exchange Online Protection

{{ Fill MAPIEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEnabled

> Applicable: Exchange Online, Exchange Online Protection

{{ Fill OWAEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMailboxPolicy

> Applicable: Exchange Online, Exchange Online Protection

The OwaMailboxPolicy parameter specifies the Outlook on the web (formerly known as Outlook Web App) mailbox policy for the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

The default value is OwaMailboxPolicy-Default.

You can use the Get-OwaMailboxPolicy cmdlet to view the available Outlook on the web mailbox policies.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnabled

> Applicable: Exchange Online, Exchange Online Protection

The PopEnabled parameter enables or disables access to the mailbox by using POP3 clients. Valid values are:

- $true: POP3 access to the mailbox is enabled. This is the default value.
- $false: POP3 access to the mailbox is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online, Exchange Online Protection

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

## OUTPUTS

## NOTES

## RELATED LINKS
