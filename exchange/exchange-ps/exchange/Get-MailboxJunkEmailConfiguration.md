---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxjunkemailconfiguration
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxJunkEmailConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-MailboxJunkEmailConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxJunkEmailConfiguration cmdlet to view the junk email settings on mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailboxJunkEmailConfiguration [-Identity] <MailboxIdParameter>
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
The junk email settings on the mailbox are:

- Enable or disable the junk email rule: In on-premises Exchange, the junk email rule (a hidden Inbox rule named Junk E-mail Rule) controls the delivery of messages to the Junk Email folder or the Inbox based on the SCL Junk Email Folder threshold (for the organization or the mailbox) and the safelist collection on the mailbox.

  In the cloud-based service, the junk email rule has no effect on mail flow. Exchange Online Protection delivers messages to the Junk Email folder based on the actions set in anti-spam policies. The junk email rule on the mailbox still controls what happens to messages after delivery based on the safelist collection of the mailbox.

  Users can enable or disable the junk email rule in their own mailbox by using Outlook on the web.

- Configure the safelist collection: The safelist collection is the Safe Senders list, the Safe Recipients list, and the Blocked Senders list. Users can configure the safelist collection on their own mailbox by using Microsoft Outlook or Outlook on the web.

Administrators can enable or disable the junk email rule, and configure the safelist collection on a mailbox by using the Set-MailboxJunkEmailConfiguration cmdlet. For more information, see [Configure Exchange antispam settings on mailboxes](https://learn.microsoft.com/Exchange/antispam-and-antimalware/antispam-protection/configure-antispam-settings).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxJunkEmailConfiguration -Identity "David Pelton"
```

This example returns the junk email configuration for the user named David Pelton.

### Example 2
```powershell
$AllUsers = Get-Mailbox -ResultSize unlimited -RecipientTypeDetails UserMailbox

$AllUsers | foreach {Get-MailboxJunkEmailConfiguration -Identity $_.UserPrincipalName} | Where {$_.Enabled -eq $false} | Format-Table -Auto Identity,Enabled
```

This example returns a summary list of all mailboxes in your organization where the junk email rule is disabled. The first command stores all user mailboxes in a variable. The second command parses through the mailboxes and returns the FQDN of the mailboxes where the junk email rule is disabled.

To return all mailboxes where the junk email rule is enabled, change the value $false to $true. To return a mixed list of mailboxes where the junk email rule is enabled and disabled, remove the "| Where {$\_.Enabled -eq $false " part of the second command.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

You can use the wildcard character (\*) to identify multiple mailboxes.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: True
```

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. You don't need to specify a value with this switch.

The command: `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest requires the ReadFromDomainController switch. Otherwise, the command might use a global catalog that contains outdated information. Also, you might need to run multiple iterations of the command with the ReadFromDomainController switch to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
