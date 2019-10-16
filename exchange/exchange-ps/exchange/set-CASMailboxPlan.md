---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Set-CASMailboxPlan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-CASMailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-CASMailboxPlan cmdlet to modify Client Access services (CAS) mailbox plans in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-CASMailboxPlan [-Identity] <MailboxPlanIdParameter>
 [-ActiveSyncEnabled <$true | $false>]
 [-Confirm]
 [-ImapEnabled <$true | $false>]
 [-OwaMailboxPolicy <MailboxPolicyIdParameter>]
 [-PopEnabled <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
A CAS mailbox plan is tied to the corresponding mailbox plan that has the same name (and display name). Like mailbox plans, CAS mailbox plans correspond to license types, and are applied to a mailbox when you license the user. The availability of a CAS mailbox plan is determined by your selections when you enroll in the service and the age of your organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CASMailboxPlan -Identity ExchangeOnlineEnterprise -ActiveSyncEnabled $false -PopEnabled $false
```

This example disables Exchange ActiveSync and POP3 access to mailboxes in the CAS mailbox plan named ExchangeOnlineEnterprise.

## PARAMETERS

### -Identity
The Identity parameter specifies the CAS mailbox plan that you want to modify. You can use any value that uniquely identifies the CAS mailbox plan. For example:

- Name

- Distinguished name (DN)

- GUID

The display name and name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, ExchangeOnlineEnterprise and ExchangeOnlineEnterprise-\<GUID\>, respectively).

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncEnabled
The ActiveSyncEnabled parameter enables or disables access to the mailbox by using Exchange Active Sync (EAS). Valid values are:

- $true: ActiveSync access to the mailbox is enabled. This is the default value.

- $false: ActiveSync access to the mailbox is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnabled
The ImapEnabled parameter enables or disables access to the mailbox by using IMAP4 clients. Valid values are:

- $true: IMAP4 access to the mailbox is enabled. This is default value for all CAS mailbox plans except ExchangeOnlineDeskless.

- $false: IMAP4 access to the mailbox is disabled. This is default value for ExchangeOnlineDeskless.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMailboxPolicy
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnabled
The PopEnabled parameter enables or disables access to the mailbox by using POP3 clients. Valid values are:

- $true: POP3 access to the mailbox is enabled. This is the default value.

- $false: POP3 access to the mailbox is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/1f9070cd-cae6-4e16-93d7-301abac8cab5.aspx)
