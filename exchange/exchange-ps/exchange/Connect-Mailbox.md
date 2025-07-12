---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/connect-mailbox
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Connect-Mailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Connect-Mailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Connect-Mailbox cmdlet to connect disconnected mailboxes to existing user accounts that don't already have mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Equipment
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> [-Equipment]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-User <UserIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Linked
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> -LinkedDomainController <Fqdn> -LinkedMasterAccount <UserIdParameter> [-LinkedCredential <PSCredential>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-User <UserIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Room
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> [-Room]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-User <UserIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Shared
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> [-Shared]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-User <UserIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### ValidateOnly
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> [-ValidateOnly]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### User
```
Connect-Mailbox [-Identity] <StoreMailboxIdParameter> [-Database] <DatabaseIdParameter> [-User <UserIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-AllowLegacyDNMismatch]
 [-Archive]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you link a mailbox to an existing user account, that user account has full access to the mailbox and all mail in the mailbox.

If you use the User parameter to specify the user account, make sure you specify the correct account. If you don't use the User parameter, we recommend that you use the ValidateOnly switch to verify which user account the mailbox will try to connect to.

There is no Disconnect-Mailbox cmdlet. You can use the Disable-Mailbox or Remove-Mailbox cmdlets to effectively disconnect mailboxes from user accounts.

Use the Disable-Mailbox cmdlet to:

- Disconnect the mailbox from the user account.
- Keep the mailbox in the disabled state before it's permanently deleted, subject to the deleted mailbox retention period.
- Keep the user account, but remove the Exchange attributes from the account.

Use the Remove-Mailbox cmdlet to:

- Disconnect the mailbox from the user account.
- Keep the mailbox in the disabled state before it's permanently deleted, subject to the deleted mailbox retention period (except if you use the Permanent or StoreMailboxIdentity parameters, which immediately deletes the mailbox from the database).
- Remove the user account.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Connect-Mailbox -Database "Mailbox Database" -Identity "John Evans"
```

This example connects John Evans' disconnected mailbox. The example doesn't specify a user to connect the mailbox to, so the command attempts to find a uniquely matched user object.

### Example 2
```powershell
Connect-Mailbox -Identity "John Evans" -Database "MBXDB02" -LinkedDomainController FabrikamDC01 -LinkedMasterAccount john@fabrikam.com
```

This example connects a linked mailbox.

### Example 3
```powershell
Connect-Mailbox -Identity "CAR001" -Database "MBXResourceDB" -Equipment -User "CAR001"
```

This example connects an equipment mailbox.

### Example 4
```powershell
Connect-Mailbox -Identity "ConfRm212" -Database "MBXResourceDB" -Room -User "Conference Room 212"
```

This example connects a room mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to connect to a user account. This parameter doesn't specify an Active Directory object. You can use the following values to identify the mailbox:

- Display name
- GUID
- LegacyExchangeDN

You use this parameter with the Database parameter to specify the mailbox that you want to connect.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Database
The Database parameter specifies the Exchange database that contains the mailbox that you want to connect. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You use this parameter with the Identity parameter to specify the mailbox that you want to connect.

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Equipment
The Equipment switch is required to connect equipment mailboxes. You don't need to specify a value with this switch.

Equipment mailboxes are resource mailboxes that aren't associated with a specific location (for example, vehicles or computers).

```yaml
Type: SwitchParameter
Parameter Sets: Equipment
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedDomainController
The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter.

This parameter is required only if you're connecting a linked mailbox.

```yaml
Type: Fqdn
Parameter Sets: Linked
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if this mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox. You can use any value that uniquely identifies the master account. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

This parameter is required only if you're connecting a linked mailbox.

```yaml
Type: UserIdParameter
Parameter Sets: Linked
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
The Room switch is required to connect room mailboxes. You don't need to specify a value with this switch.

Room mailboxes are resource mailboxes that are associated with a specific location (for example, conference rooms).

```yaml
Type: SwitchParameter
Parameter Sets: Room
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared
The Shared switch is required to connect shared mailboxes. You don't need to specify a value with this switch.

A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. This mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

```yaml
Type: SwitchParameter
Parameter Sets: Shared
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidateOnly
The ValidateOnly switch tells the cmdlet to evaluate the conditions and requirements necessary to perform the operation and then reports whether the operation will succeed or fail. You don't need to specify a value with this switch.

No changes are made when you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ValidateOnly
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy
The ActiveSyncMailboxPolicy parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:.

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default mobile device mailbox policy is used.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookPolicy
The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name
- Distinguished name (DN)
- GUID

For more information about address book policies, see [Address book policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/address-book-policies/address-book-policies).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
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
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyDNMismatch
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: User
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch specifies whether to connect the associated archive mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -LinkedCredential
The LinkedCredential parameter specifies the credentials used to access the domain controller that's specified by the LinkedDomainController parameter. This parameter is optional, even if you're connecting a linked mailbox.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: Linked
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy
The RetentionPolicy parameter specifies the retention policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user object in Active Directory that you want to connect the mailbox to.

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

Otherwise, you can use any value that uniquely identifies the user. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

If you don't use this parameter, the command uses the LegacyExchangeDN and DisplayName property values of the mailbox to find a user account that has those same values. If it can't find a unique match, it doesn't connect the mailbox.

```yaml
Type: UserIdParameter
Parameter Sets: Equipment, Linked, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
