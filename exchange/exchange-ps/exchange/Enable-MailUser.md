---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Enable-MailUser

## SYNOPSIS
!!! Exchange Server 2010

Use the Enable-MailUser cmdlet to mail-enable an existing user in Active Directory.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Enable-MailUser cmdlet to mail-enable an existing user in Active Directory.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Enable-MailUser cmdlet to mail-enable existing users that aren't already mail-enabled.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Enable-MailUser [-Identity] <UserIdParameter> -ExternalEmailAddress <ProxyAddress> [-Alias <String>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>]
 [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>]
 [-PrimarySmtpAddress <SmtpAddress>] [-UsePreferMessageFormat <$true | $false>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Enable-MailUser [-Identity] <UserIdParameter> [-Alias <String>] [-ArchiveName <MultiValuedProperty>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-PrimarySmtpAddress <SmtpAddress>] [-WhatIf]
 [-ExternalEmailAddress <ProxyAddress>] [<CommonParameters>]
```

###  (Default)
```
Enable-MailUser [-Identity] <UserIdParameter> -ExternalEmailAddress <ProxyAddress> [-Alias <String>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>]
 [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>]
 [-PrimarySmtpAddress <SmtpAddress>] [-UsePreferMessageFormat <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Enable-MailUser cmdlet mail-enables an existing user in Active Directory by adding the attributes that are required by Microsoft Exchange. The user's identity and an external e-mail address are required. Mail-enabled users have an e-mail address at the Exchange organization (for example, john@contoso.com), but they don't have an Exchange mailbox. E-mail messages addressed to the mail-enabled user are sent instead to the specified external e-mail address.

To create a user who is mail-enabled at the time of creation, use the New-MailUser cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Enable-MailUser cmdlet mail-enables an existing user in Active Directory by adding the attributes required by Microsoft Exchange. The user's identity and an external email address are required. Mail-enabled users have an email address at the Exchange organization (for example, john@contoso.com), but they don't have an Exchange mailbox. Email messages addressed to the mail-enabled user are sent instead to the specified external email address.

To create a user who is mail-enabled at the time of creation, use the New-MailUser cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016

The Enable-MailUser cmdlet mail-enables existing users by adding the email attributes that are required by Exchange. Mail users are visible to the other \*-MailUser cmdlets.

Mail users have email addresses and accounts in the Exchange organization, but they don't have Exchange mailboxes. Email messages sent to mail users are delivered to the specified external email address.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Enable-MailUser -Identity John -ExternalEmailAddress john@contoso.com
```

This example mail-enables user John with the external e-mail address john@contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-MailUser -Identity John -ExternalEmailAddress john@contoso.com
```

This example mail-enables user John with the external email address john@contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-MailUser -Identity John -ExternalEmailAddress john@contoso.com
```

This example mail-enables user John with the external email address john@contoso.com.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the mail user object.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

The Identity parameter specifies the identity of the mail user object.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016

The Identity parameter specifies the user that you want to mail-enable. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ExternalEmailAddress
!!! Exchange Server 2010

The ExternalEmailAddress parameter specifies an e-mail address outside the organization. E-mail messages sent to the mail-enabled user are sent to this external address.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalEmailAddress parameter specifies an email address outside the organization. Email messages sent to the mail-enabled user are sent to this external address.



```yaml
Type: ProxyAddress
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: ProxyAddress
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
!!! Exchange Server 2010, Exchange Server 2013

The Alias parameter specifies the alias of the user. An alias can contain letters, numbers, and the following punctuation marks and symbols:

- !

- #

- $

- %

- ^

- &

- \*

- +

- -

- .

- /

- =

- ?

- \_

- {

- }

- |

- ~



!!! Exchange Server 2016

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

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

### -ArchiveName
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the display name for the mail user. The DisplayName is the name that appears in the Exchange Management Console under Recipient Configuration.



!!! Exchange Server 2013

The DisplayName parameter specifies the display name for the mail user. The DisplayName parameter is the name that appears in the Exchange Administration Center.



!!! Exchange Server 2016

The DisplayName parameter specifies the display name of the mail user. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -MacAttachmentFormat
!!! Exchange Server 2010, Exchange Server 2013

The MacAttachmentFormat parameter specifies the Apple Macintosh operating system attachment format for messages sent to the mail user. The valid values for this parameter are:

- BinHex

- UuEncode

- AppleSingle

- AppleDouble

By default, this parameter is set to BinHex.

The acceptable values for the MacAttachmentFormat parameter are dependent on the MessageFormat parameter. If the MessageFormat parameter is set to Text, you can only use BinHex or UuEncode values for this parameter. If the MessageFormat parameter is set to Mime, you can only use BinHex, AppleSingle, or AppleDouble values for this parameter.



!!! Exchange Server 2016

The MacAttachmentFormat parameter specifies the Apple Macintosh operating system attachment format to use for messages sent to the mail contact or mail user. Valid values are:

- BinHex (This is the default value)

- UuEncode

- AppleSingle

- AppleDouble

The MacAttachmentFormat and MessageFormat parameters are interdependent:

- MessageFormat is Text: MacAttachmentFormat can be BinHex or UuEncode.

- MessageFormat is Mime: MacAttachmentFormat can be BinHex, AppleSingle, or AppleDouble.



```yaml
Type: BinHex | UuEncode | AppleSingle | AppleDouble
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageBodyFormat
!!! Exchange Server 2010, Exchange Server 2013

The MessageBodyFormat parameter specifies the message body format for messages sent to the mail user. The valid values for this parameter are:

- Text

- Html

- TextAndHtml

By default, this parameter is set to TextAndHtml.

The MessageFormat and MessageBodyFormat parameters are interdependent.If the MessageFormat parameter is set to Mime, the MessageBodyFormat parameter can be set to any valid value. However, if the MessageFormat parameter is set to Text, the MessageBodyFormat parameter can only be set to Text. Therefore, if you want to set this parameter to Html or TextAndHtml, you must also set the MessageFormat parameter to Mime.



!!! Exchange Server 2016

The MessageBodyFormat parameter specifies the message body format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Html

- TextAndHtml (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.



```yaml
Type: Text | Html | TextAndHtml
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormat
!!! Exchange Server 2010, Exchange Server 2013

The MessageFormat parameter specifies the message format for messages sent to the mail user.

The valid values for this parameter are:

- Text

- Mime

By default, this parameter is set to Mime.

The MessageFormat and MessageBodyFormat parameters are interdependent. If the MessageFormat parameter is set to Mime, the MessageBodyFormat parameter can be set to any valid value. However, if the MessageFormat parameter is set to Text, the MessageBodyFormat parameter can only be set to Text. Therefore, if you want to change the MessageFormat parameter from Mime to Text, you must also change the MessageBodyFormat parameter to Text.



!!! Exchange Server 2016

The MessageFormat parameter specifies the message format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Mime (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.

Therefore, if you want to change the MessageFormat parameter from Mime to Text, you must also change the MessageBodyFormat parameter to Text.



```yaml
Type: Text | Mime
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the Reply to address for the mail user. By default, the primary SMTP address is the same as the ExternalEmailAddress parameter value. We recommend that you don't set this parameter unless you're in a cross-forest scenario. If you want to set the primary SMTP address to be a different address from the external e-mail address, you need to set the EmailAddressPolicyEnabled parameter to $false by using the Set-MailUser cmdlet, otherwise the mail user's primary SMTP address will use the ExternalEmailAddress parameter value regardless of the value in the PrimarySmtpAddress parameter.



!!! Exchange Server 2013

The PrimarySmtpAddress parameter specifies the Reply to address for the mail user. By default, the primary SMTP address is the same as the ExternalEmailAddress parameter value. We recommend that you don't set this parameter unless you're in a cross-forest scenario. If you want to set the primary SMTP address to be a different address from the external email address, you need to set the EmailAddressPolicyEnabled parameter to $false by using the Set-MailUser cmdlet, otherwise the mail user's primary SMTP address will use the ExternalEmailAddress parameter value regardless of the value in the PrimarySmtpAddress parameter.



!!! Exchange Server 2016

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

By default, the primary address is the same as the ExternalEmailAddress parameter value.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mail user to False, which means the email addresses of the mail user aren't automatically updated by email address policies. We recommend that you don't set the primary email address to a value other than the ExternalEmailAddress unless you're in a cross-forest scenario.



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

### -UsePreferMessageFormat
!!! Exchange Server 2010, Exchange Server 2013

The UsePreferMessageFormat parameter specifies whether the message format settings configured for the mailbox override the global settings configured for the domain. Set this parameter to $true to have the message format settings configured for the mailbox to override any global settings.



!!! Exchange Server 2016

The UsePreferMessageFormat specifies whether the message format settings configured for the mail user or mail contact override the global settings configured for the remote domain or configured by the message sender. Valid value are:

- $true: Messages sent to the mail user or mail contact use the message format that's configured for the mail user or mail contact.

- $false: Messages sent to the mail user or mail contact use the message format that's configured for the remote domain (the default remote domain or a specific remote domain) or configured by the message sender. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: Set1, (All)
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/1a6e86d0-09d8-4570-bf43-7ae6f1386c78.aspx)

