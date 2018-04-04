---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: New-HotmailSubscription
schema: 2.0.0
---

# New-HotmailSubscription

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

The New-HotmailSubscription cmdlet allows a user to create Hotmail account subscriptions in their own cloud-based mailbox. An administrator can't use this cmdlet to create subscriptions in another user's mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-HotmailSubscription [-Name] <String> -EmailAddress <SmtpAddress> -Password <SecureString> [-Confirm]
 [-DisplayName <String>] [-Mailbox <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-HotmailSubscription cmdlet creates a connection between a user's mailbox in the cloud-based service and a remote Hotmail mailbox. The cloud-based mailbox periodically polls the Hotmail mailbox for new messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-HotmailSubscription -Name "Ayla's Hotmail" -EmailAddress ayla@fabrikam.com -Password (ConvertTo-SecureString -String 'Pa$$word1' -AsPlainText -Force)
```

This example creates the Hotmail subscription Ayla's Hotmail in the mailbox of the user Ayla Kol. The Hotmail account has the following details:


Email address: ayla@fabrikam.com

Password: Pa$$word1

## PARAMETERS

### -EmailAddress
The EmailAddress parameter specifies the email address of the Hotmail mailbox.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the Hotmail subscription. The name of the subscription doesn't have to be globally unique. The name must be unique compared to other subscriptions that exist in the same mailbox.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter specifies the password used to sign in to the Hotmail mailbox. You must specify the value for this parameter in a secure format, for example, (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
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

### -DisplayName
The DisplayName parameter specifies the friendly name of the Hotmail subscription. If you don't specify a value for the DisplayName parameter, the value of the EmailAddress parameter is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the cloud-based mailbox that will contain the Hotmail subscription. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/04990a05-da71-43e7-9ba8-859a088891d4.aspx)

