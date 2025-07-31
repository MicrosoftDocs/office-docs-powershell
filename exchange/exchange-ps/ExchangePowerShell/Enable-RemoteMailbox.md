---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/enable-remotemailbox
schema: 2.0.0
title: Enable-RemoteMailbox
---

# Enable-RemoteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Enable-RemoteMailbox cmdlet to create a mailbox in the cloud-based service for an existing user in the on-premises Active Directory.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Enable-RemoteMailbox [-Identity] <UserIdParameter>
 [-RemoteRoutingAddress <ProxyAddress>]
 [-ACLableSyncedObjectEnabled]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

### Room
```
Enable-RemoteMailbox [-Identity] <UserIdParameter>
 [-Room]
 [-ACLableSyncedObjectEnabled]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemoteRoutingAddress <ProxyAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

### Equipment
```
Enable-RemoteMailbox [-Identity] <UserIdParameter>
 [-Equipment]
 [-ACLableSyncedObjectEnabled]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemoteRoutingAddress <ProxyAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

### Archive
```
Enable-RemoteMailbox [-Identity] <UserIdParameter>
 [-Archive]
 [-ArchiveName <MultiValuedProperty>]
 [-ACLableSyncedObjectEnabled]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

### Shared
```
Enable-RemoteMailbox [-Identity] <UserIdParameter>
 [-Shared]
 [-ACLableSyncedObjectEnabled]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemoteRoutingAddress <ProxyAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Enable-RemoteMailbox cmdlet mail-enables an existing on-premises user. The mail-enabled user contains a specific attribute that indicates that an associated mailbox in the service should be created when the user is synchronized to the service using directory synchronization.

Directory synchronization must be configured correctly for a mailbox to be created in the service. Creation of the mailbox in the service isn't immediate and depends on the directory synchronization schedule.

The policies that you apply to recipients in the on-premises Exchange organization, such as Unified Messaging or compliance policies, aren't applied to mailboxes in the service. You must configure policies in the service if you want policies to be applied to recipients in the service.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-RemoteMailbox "Kim Akers" -RemoteRoutingAddress "kima@contoso.mail.onmicrosoft.com"
```

This example mail-enables an existing on-premises user and creates an associated mailbox in the service.

After the user is mail-enabled, directory synchronization synchronizes the mail-enabled user to the service and the associated mailbox is created.

### Example 2
```powershell
Enable-RemoteMailbox "Kim Akers" -RemoteRoutingAddress "kima@contoso.mail.onmicrosoft.com"

Enable-RemoteMailbox "Kim Akers" -Archive
```

This example does the following:

Mail-enables an existing on-premises user.

Creates the associated mailbox in the service.

Creates an archive mailbox in the service for the mailbox.

To mail-enable an on-premises user, create the associated mailbox in the service, enable the archive mailbox in the service and include the Archive switch with the Enable-RemoteMailbox cmdlet.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the existing on-premises user. You can use any value that uniquely identifies the user. For example:

- ADObjectID
- GUID
- Distinguished name (DN)
- Domain\\Username
- User principal name (UPN)
- LegacyExchangeDN
- User alias

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Equipment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Equipment switch specifies that the mailbox in the service should be created as an equipment resource mailbox. You don't need to specify a value with this switch.

Equipment mailboxes are resource mailboxes that aren't associated with a specific location (for example, vehicles or computers).

You can't use this switch with the Room or Shared switches.

```yaml
Type: SwitchParameter
Parameter Sets: Equipment, Shared
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Room switch specifies that the mailbox in the service should be created as a room resource mailbox. You don't need to specify a value with this switch.

You can't use this switch with the Equipment or Shared switches.

```yaml
Type: SwitchParameter
Parameter Sets: Room
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

**Note**: This switch is available only in Exchange 2013 CU21 or later and Exchange 2016 CU10 or later. To use this switch, you also need to run setup.exe /PrepareAD. For more information, see [KB4133605](https://support.microsoft.com/help/4133605).

The Shared switch specifies that the mailbox in the service should be created as a shared mailbox. You don't need to specify a value with this switch.

You can't use this switch with the Room or Equipment switches.

```yaml
Type: SwitchParameter
Parameter Sets: Shared
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ACLableSyncedObjectEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ACLableSyncedObjectEnabled switch specifies whether the remote mailbox is an ACLableSyncedMailboxUser. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.onmicrosoft.com results in the Alias property value `helpdesk`.
- Recipients without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Archive switch creates an archive mailbox for an existing cloud-based user that already has a mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook on the web (formerly known as Outlook Web App). If the value contains spaces, enclose the value in quotation marks (").

If you don't use this parameter, the following default values are used based on the version of Exchange:

- Exchange 2016 or later: `In-Place Archive -<Display Name>`
- Exchange 2013: `In-Place Archive - <Display Name>`
- Exchange 2010: `Personal Archive - <Display Name>`

In Outlook, the value of this parameter is ignored. The name of the archive mailbox that's shown in the folder list is `Online Archive - <PrimarySMTPAddress>`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DisplayName parameter specifies the display name for the mailbox that's created in the service. The display name is visible in the Exchange admin center, address lists and Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteRoutingAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RemoteRoutingAddress parameter specifies the SMTP address of the mailbox in the service that this user is associated with.

```yaml
Type: ProxyAddress
Parameter Sets: Default, Room, Equipment, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
