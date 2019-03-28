---
external help file: 
applicable: Exchange Online
title: Get-FocusedInbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-FocusedInbox

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-FocusedInbox cmdlet to view the Focused Inbox configuration for mailboxes in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-FocusedInbox -Identity <MailboxIdParameter> [<CommonParameters>]
```

## DESCRIPTION
Focused Inbox is a replacement for Clutter that separates the Inbox into the Focused and Other tabs in Outlook on the web and newer versions of Outlook. Important emails are on the Focused tab while the rest are on the Other tab.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-FocusedInbox -Identity julia@contoso.com
```

This example returns the Focused Inbox configuration for the mailbox of julia@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

-  \<domain name>\\\<account name>

- Email address

- GUID

- LegacyExchangeDN 

- SamAccountName 

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
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

[Online version](https://technet.microsoft.com/library/752ea258-b6e7-41bd-89cc-88eb368d3838.aspx)
