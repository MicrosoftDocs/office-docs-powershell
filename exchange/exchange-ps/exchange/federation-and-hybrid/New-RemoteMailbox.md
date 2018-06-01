---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: New-RemoteMailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# New-RemoteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-RemoteMailbox cmdlet to create a mail user in the on-premises Active Directory and also create an associated mailbox in the cloud-based service.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set4
```
New-RemoteMailbox [-Name] <String> [-AccountDisabled] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OnPremisesOrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-RemoteRoutingAddress <ProxyAddress>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ACLableSyncedObjectEnabled]
 [<CommonParameters>]
```

### Set3
```
New-RemoteMailbox [-Name] <String> [-Equipment] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OnPremisesOrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-RemoteRoutingAddress <ProxyAddress>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ACLableSyncedObjectEnabled]
 [<CommonParameters>]
```

### Set1
```
New-RemoteMailbox [-Name] <String> -Password <SecureString> -UserPrincipalName <String> [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OnPremisesOrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-RemoteRoutingAddress <ProxyAddress>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ACLableSyncedObjectEnabled]
 [<CommonParameters>]
```

### Set2
```
New-RemoteMailbox [-Name] <String> [-Password <SecureString>] [-Room] [-UserPrincipalName <String>]
 [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OnPremisesOrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-RemoteRoutingAddress <ProxyAddress>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ACLableSyncedObjectEnabled]
 [<CommonParameters>]
```

### Set5
```
New-RemoteMailbox [-Name] <String> [-Password <SecureString>] [-UserPrincipalName <String>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OnPremisesOrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-RemoteRoutingAddress <ProxyAddress>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ACLableSyncedObjectEnabled]
 [<CommonParameters>]
```

## DESCRIPTION
The New-RemoteMailbox cmdlet creates an on-premises mail user. The mail user contains a specific attribute, which indicates that an associated mailbox in the service should be created when the user is synchronized to the service using directory synchronization.

Directory synchronization must be configured correctly for a mailbox to be created in the service. Creation of the mailbox in the service isn't immediate and depends on the directory synchronization schedule.

The policies that you apply to recipients in the on-premises Exchange organization, such as Unified Messaging or compliance policies, aren't applied to mailboxes in the service. You must configure policies in the service if you want policies to be applied to recipients in the service.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Credentials = Get-Credential; New-RemoteMailbox -Name "Kim Akers" -Password $Credentials.Password -UserPrincipalName kim@corp.contoso.com
```

This example creates an on-premises mail user and its associated mailbox in the service. The remote routing address doesn't need to be specified because mail flow between the on-premises organization and the service has been configured. Using this configuration, the New-RemoteMailbox cmdlet automatically calculates the SMTP address of the mailbox to be used with the RemoteRoutingAddress parameter. This example also assumes directory synchronization has been configured.

The first command stores the password to use with the new remote mailbox in a variable by using the Get-Credential cmdlet. The last command creates the mail user.

After the new mail user is created, directory synchronization synchronizes the new mail user to the service and the associated mailbox is created.

### -------------------------- Example 2 --------------------------
```
$Credentials = Get-Credential; New-RemoteMailbox -Name "Kim Akers" -Password $Credentials.Password -UserPrincipalName kim@corp.contoso.com -OnPremisesOrganizationalUnit "corp.contoso.com/Archive Users" -Archive
```

This example does the following steps:

Creates an on-premises mail user. The mail user is placed in the contoso.com/Archive Users OU. The OU has no effect on the mailbox in the service.

Creates the associated mailbox in the service.

Creates an archive mailbox in the service for the mailbox.

As in Example 1, this example assumes that mail flow and directory synchronization have been properly configured.

## PARAMETERS

### -AccountDisabled
The AccountDisabled switch specifies whether to create the mail user in a disabled state. You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Equipment
The Equipment switch specifies that the mailbox in the service should be created as an equipment resource mailbox.

You can't use the Equipment switch if you specified the Room switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the on-premises mail user and the associated mailbox in the service. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter specifies the password used by the mail user to secure his or her account and associated mailbox in the service.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.

```yaml
Type: SecureString
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecureString
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
The Room switch specifies that the mailbox in the service should be created as a room resource mailbox.

You can't use the Room switch if you specified the Equipment switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format \<username\>@\<domain\>. Typically, the \<domain\> value is the domain where the user account resides.

```yaml
Type: String
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, \`, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch specifies whether to create an archive mailbox in the service in addition to the mailbox that's created in the service.

You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mail user and the associated mailbox in the service. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
The FirstName parameter specifies the user's first name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId
The ImmutableId parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com.

You need to set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario.

The ImmutableId parameter is used by GAL Synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox that's used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable identifier based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com. You must set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premise Exchange deployment scenario.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initials
The Initials parameter specifies the user's middle initials.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName
The LastName parameter specifies the user's last name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesOrganizationalUnit
The OnPremisesOrganizationalUnit parameter specifies the organizational unit (OU) in the on-premises organization in which the new mailbox is added (for example, redmond.contoso.com/Users).

Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

This parameter has no effect on the mailbox in the service.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled
The RemotePowerShellEnabled parameter specifies whether the user can connect to Exchange using remote PowerShell. Remote PowerShell is required to open the Exchange Management Shell on Exchange servers, or to use Windows PowerShell open and import a remote PowerShell session to Exchange. Access to remote PowerShell is required even if you're trying to open the Exchange Management Shell on the local Exchange server. Valid values are:

- $true: The user can use remote PowerShell. This is the default value.

- $false: The user can't use remote PowerShell.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteRoutingAddress
The RemoteRoutingAddress parameter specifies the SMTP address of the mailbox in the service that this user is associated with. This address is created automatically when the service is initially configured in the format of \<your domain\>.mail.onmicrosoft.com.

If you've configured mail flow between the on-premises organization and the service, such as in a hybrid deployment, you don't need to specify this parameter. The remote routing address is calculated automatically and assigned to the email address policy for the on-premises organization by the Hybrid Configuration wizard.

```yaml
Type: ProxyAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPasswordOnNextLogon
The ResetPasswordOnNextLogon parameter specifies whether the user must change their password the next time they log on. Valid values are:

- $true: The user is required to change their password the next time they log on.

- $false: The user isn't required to change their password the next time they log on. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, } and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications
The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.

- Internal: Notify senders in the organization when their messages aren't approved.

- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: Never | Internal | Always
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ACLableSyncedObjectEnabled
The ACLableSyncedObjectEnabled switch specfies whether the remote mailbox is an ACLableSyncedMailboxUser. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/f9e000c3-5f77-494b-8caf-05176aa75c8a.aspx)
