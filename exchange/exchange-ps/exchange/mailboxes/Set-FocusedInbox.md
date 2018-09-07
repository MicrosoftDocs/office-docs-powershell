---
external help file: 
applicable: Exchange Online
title: Set-FocusedInbox
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-FocusedInbox

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-FocusedInbox cmdlet to enable or disable Focused Inbox for mailboxes in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-FocusedInbox -Identity <MailboxIdParameter> [-FocusedInboxOn <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Focused Inbox is a replacement for Clutter that separates the Inbox into the Focused and Other tabs in Outlook on the web and newer versions of Outlook. Important emails are on the Focused tab while the rest are on the Other tab.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-FocusedInbox -Identity laura@contoso.com -FocusedInboxOn $false
```

This example disables Focused Inbox for the mailbox of laura@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

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

### -FocusedInboxOn
The FocusedInboxOn parameter enables or disables Focused Inbox for the mailbox. Valid values are:

- $true: Focused Inbox is enabled. This is the default value.

- $false: Focused Inbox is disabled.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online version](https://technet.microsoft.com/library/29f40631-f393-47ec-8081-464aacb1eb14.aspx)
