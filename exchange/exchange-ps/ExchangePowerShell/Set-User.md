---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-user
schema: 2.0.0
title: Set-User
---

# Set-User

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-User cmdlet to modify user attributes. You can use this cmdlet to modify all objects that have user accounts (for example, user mailboxes, mail users, and user accounts).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-User [-Identity] <UserIdParameter>
 [-AllowUMCallsFromNonUsers <AllowUMCallsFromNonUsersFlags>]
 [-Arbitration]
 [-AssistantName <String>]
 [-AuthenticationPolicy <String>]
 [-BlockCloudCache <Boolean>]
 [-CanHaveCloudCache <Boolean>]
 [-CertificateSubject <MultiValuedProperty>]
 [-City <String>]
 [-ClearDataEncryptionPolicy]
 [-Company <String>]
 [-Confirm]
 [-CountryOrRegion <CountryInfo>]
 [-CreateDTMFMap <Boolean>]
 [-Department <String>]
 [-DesiredWorkloads <MailboxWorkloadFlags>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-EXOModuleEnabled <Boolean>]
 [-Fax <String>]
 [-FirstName <String>]
 [-Force]
 [-GeoCoordinates <GeoCoordinates>]
 [-HomePhone <String>]
 [-IgnoreDefaultScope]
 [-IsShadowMailbox <Boolean>]
 [-Initials <String>]
 [-LastName <String>]
 [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>]
 [-LinkedMasterAccount <UserIdParameter>]
 [-MailboxRegion <String>]
 [-MailboxRegionSuffix <MailboxRegionSuffixValue>]
 [-ManagedOnboardingType <ManagedOnboardingType>]
 [-Manager <UserContactIdParameter>]
 [-MobilePhone <String>]
 [-Name <String>]
 [-Notes <String>]
 [-Office <String>]
 [-OtherFax <MultiValuedProperty>]
 [-OtherHomePhone <MultiValuedProperty>]
 [-OtherTelephone <MultiValuedProperty>]
 [-Pager <String>]
 [-PermanentlyClearPreviousMailboxInfo]
 [-Phone <String>]
 [-PhoneticDisplayName <String>]
 [-PostalCode <String>]
 [-PostOfficeBox <MultiValuedProperty>]
 [-PublicFolder]
 [-RemotePowerShellEnabled <Boolean>]
 [-RemoveMailboxProvisioningConstraint]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SamAccountName <String>]
 [-SeniorityIndex <Int32>]
 [-SimpleDisplayName <String>]
 [-SkipDualWrite]
 [-StateOrProvince <String>]
 [-StreetAddress <String>]
 [-StsRefreshTokensValidFrom <DateTime>]
 [-TelephoneAssistant <String>]
 [-Title <String>]
 [-UMCallingLineIds <MultiValuedProperty>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UserPrincipalName <String>]
 [-VIP <Boolean>]
 [-WebPage <String>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-User cmdlet contains no mail-related properties for mailboxes or mail users. To modify the mail-related properties for a user, you need to use the corresponding cmdlet based on the object type (for example, Set-Mailbox or Set-MailUser).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-User -Identity Contoso\Jill -DisplayName "Jill Frank"
```

This example sets the display name for user Jill Frank.

### Example 2
```powershell
Set-User -Identity Kweku@fabrikam.com -LinkedMasterAccount $null
```

This example unlinks the linked mailbox Kweku@fabrikam.com and converts it to a user mailbox by setting the LinkedMasterAccount parameter to $null.

Performing this procedure on a linked mailbox removes all permissions on the mailbox such as Send As, Full Access, folder and calendar delegation.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the user that you want to modify. You can use any value that uniquely identifies the user. For example:

- Name
- User principal name (UPN)
- Distinguished name (DN)
- Canonical DN
- GUID
- UserPrincipalName

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

### -AllowUMCallsFromNonUsers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The AllowUMCallsFromNonUsers parameter specifies whether to exclude the user from Unified Messaging directory searches.

```yaml
Type: AllowUMCallsFromNonUsersFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Arbitration switch is required to modify arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailboxes that are used for storing different types of system data and for managing messaging approval workflow.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssistantName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The AssistantName parameter specifies the name of the user's assistant.

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

### -AuthenticationPolicy

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The AuthenticationPolicy parameter specifies the authentication policy to apply to the user. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

To remove the policy assignment for the user, use the value $null.

You create authentication policies with the New-AuthenticationPolicy cmdlet to block or selectively allow Basic authentication or (in Exchange 2019 CU2 or later) other legacy authentication methods.

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

### -BlockCloudCache

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill BlockCloudCache Description }}

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

### -CanHaveCloudCache

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill CanHaveCloudCache Description }}

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

### -CertificateSubject

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The CertificateSubject parameter specifies the value of the subject field of the user's digital certificate.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The City parameter specifies the user's city.

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

### -ClearDataEncryptionPolicy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill ClearDataEncryptionPolicy Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Company

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Company parameter specifies the user's company.

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

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -CountryOrRegion

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The CountryOrRegion parameter specifies the user's country or region. A valid value is a valid ISO 3166-1 two-letter country code (for example, AU for Australia) or the corresponding friendly name for the country (which might be different from the official ISO 3166 Maintenance Agency short name).

A reference for two-letter country codes is available at [Country Codes List](https://www.nationsonline.org/oneworld/country_code_list.htm).

The friendly name is returned in the CountryOrRegion property value by the Get-User cmdlet, but you can use either the friendly name or the two-letter country code in filter operations.

```yaml
Type: CountryInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateDTMFMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This value is the default.
- $false: A DTMF map isn't created for the recipient.

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

### -Department

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Department parameter specifies the user's department.

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

### -DesiredWorkloads

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill DesiredWorkloads Description }}

```yaml
Type: Microsoft.Exchange.Data.MailboxWorkloadFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The DisplayName parameter specifies the display name of the user. The display name is visible in the Exchange admin center and in Active Directory. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -EXOModuleEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The EXOModuleEnabled parameter specifies whether the user can connect to Exchange Online PowerShell in Microsoft 365 organizations using the Exchange Online PowerShell V3 module. Valid values are:

- $true: The user can connect to Exchange Online PowerShell.
- $false: The user can't connect to Exchange Online PowerShell.

The default value depends on the management roles that are assigned to the user.

 Access to Exchange Online PowerShell is also required for other features (for example, the ability to open the Exchange admin center (EAC)).

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

### -Fax

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Fax parameter specifies the user's fax number.

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

### -FirstName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The FirstName parameter specifies the user's first name.

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

### -Force

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeoCoordinates

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The GeoCoordinates parameter specifies the user's location in latitude, longitude and (optionally) altitude coordinates. A valid value for this parameter uses one of the following formats:

- Latitude and longitude: For example, "47.644125;-122.122411"
- Latitude, longitude, and altitude: For example, "47.644125;-122.122411;161.432"

**Note**: If period separators don't work for you, use commas instead.

```yaml
Type: GeoCoordinates
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HomePhone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The HomePhone parameter specifies the user's home telephone number.

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

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Initials parameter specifies the user's middle initials.

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

### -IsShadowMailbox

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill IsShadowMailbox Description }}

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

### -LastName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The LastName parameter specifies the user's last name.

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

### -LinkedCredential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the username and password that's used to access the domain controller specified by the LinkedDomainController parameter.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

You can only use the LinkedCredential parameter with a linked user.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedDomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if this user is a linked user. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter.

This parameter is required only if you're connecting a linked user.

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

### -LinkedMasterAccount

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if this user is a linked user. The master account is the account to which the user links. The master account grants access to the user. You can use one of the following values:

- GUID
- DN
- Domain\\Account
- UPN
- LegacyExchangeDN
- SmtpAddress
- Alias
- $null

If you set this parameter's value to $null, you unlink the account and convert the linked mailbox into a non-linked user mailbox. The mailbox doesn't retain the permissions previously set on it (for example, Send As, Full Access, folder permissions, and calendar delegation).

This parameter is required only if you're connecting a linked user.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MailboxRegion Description }}

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

### -MailboxRegionSuffix

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MailboxRegionSuffix Description }}

```yaml
Type: MailboxRegionSuffixValue
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedOnboardingType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

{{ Fill ManagedOnboardingType Description }}

```yaml
Type: ManagedOnboardingType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Manager

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Manager parameter specifies the user's manager.

```yaml
Type: UserContactIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobilePhone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The MobilePhone parameter specifies the user's primary mobile phone number.

**Note**: In Exchange Online, you can't use this parameter. Instead, use the MobilePhone parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

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

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Name parameter specifies the unique name of the user. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -Notes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

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

### -Office

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Office parameter specifies the user's physical office name or number.

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

### -OtherFax

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The OtherFax parameter specifies the user's alternative fax number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherHomePhone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The OtherHomePhone parameter specifies the user's alternative home telephone number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherTelephone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The OtherTelephone parameter specifies the user's alternative telephone number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pager

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Pager parameter specifies the user's pager number.

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

### -PermanentlyClearPreviousMailboxInfo

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The PermanentlyClearPreviousMailboxInfo switch specifies whether to clear the Exchange Online mailbox attributes on a user. You don't need to specify a value with this switch.

Clearing these attributes might be required in mailbox move and re-licensing scenarios between on-premises Exchange and Microsoft 365. For more information, see [Permanently Clear Previous Mailbox Info](https://techcommunity.microsoft.com/t5/exchange-team-blog/permanently-clear-previous-mailbox-info/ba-p/607619).

**Caution**: This switch prevents you from reconnecting to the mailbox and prevents you from recovering content from the mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Phone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Phone parameter specifies the user's office telephone number.

**Note**: In Exchange Online, you can't use this parameter. Instead, use the BusinessPhones parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

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

### -PhoneticDisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The PhoneticDisplayName parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -PostalCode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The PostalCode parameter specifies the user's zip code or postal code.

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

### -PostOfficeBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The PostOfficeBox parameter specifies the user's post office box number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The PublicFolder switch is required to modify public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

**Note**: In cloud-based environments, this parameter will be deprecated. We recommend using the EXOModuleEnabled parameter instead.

The RemotePowerShellEnabled parameter specifies whether the user has access to Exchange PowerShell. Valid values are:

- $true: The user has access to Exchange Online PowerShell, the Exchange Management Shell, and the Exchange admin center (EAC).
- $false: The user has doesn't have access to Exchange Online PowerShell, the Exchange Management Shell, or the EAC.

The default value depends on the management roles that are assigned to the user.

Access to Exchange PowerShell is required even if you're trying to open the Exchange Management Shell or the EAC on the local Exchange server.

A user's experience in any of these management interfaces is still controlled by the role-based access control (RBAC) permissions that are assigned to them.

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

### -RemoveMailboxProvisioningConstraint

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPasswordOnNextLogon

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The ResetPasswordOnNextLogon parameter specifies whether the user must change their password the next time they log on. Valid values are:

- $true: The user is required to change their password the next time they log on.
- $false: The user isn't required to change their password the next time they log on. This value is the default.

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

### -SamAccountName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters might generate collisions (for example, o and ö match). The maximum length is 20 characters.

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

### -SeniorityIndex

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The SeniorityIndex parameter specifies the order in which this user is displayed in a hierarchical address book. A user with a value of 2 is displayed higher in an address book than a user with a value of 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z
- A - Z
- 0 - 9
- space
- `" ' ( ) + , - . / : ?`

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

### -SkipDualWrite

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOrProvince

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The StateOrProvince parameter specifies the user's state or province.

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

### -StreetAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The StreetAddress parameter specifies the user's physical address.

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

### -StsRefreshTokensValidFrom

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The StsRefreshTokensValidFrom specifies the date-time that the user's STS refresh tokens are valid from.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneAssistant

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The TelephoneAssistant parameter specifies the telephone number of the user's assistant.

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

### -Title

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Title parameter specifies the user's title.

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

### -UMCallingLineIds

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UMCallingLineIds parameter specifies telephone numbers or extensions that can be mapped to a Unified Messaging (UM)-enabled user. You can specify more than one telephone number for each user, separated by a comma. This parameter accepts digits less than 128 characters in length and might include an optional plus sign (+) preceding the numbers. Each UM-enabled user must have a unique UMCallingLineIds parameter value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- `emailAddress:<integers>`
- `lastNameFirstName:<integers>`
- `firstNameLastName:<integers>`

To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>,lastNameFirstName:<integers>,firstNameLastName:<integers>`.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<integers2>}` to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format: `username@domain`. Typically, the domain value is the domain where the user account resides.

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

### -VIP

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The VIP parameter specifies whether the user is a priority account. Valid values are:

- $true: The user is a priority account.
- $false: The user is not a priority account.

For more information about priority accounts, see [Manage and monitor priority accounts](https://learn.microsoft.com/microsoft-365/admin/setup/priority-accounts).

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

### -WebPage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The WebPage parameter specifies the user's Web page.

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The WhatIf switch doesn't work on this cmdlet.

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

### -WindowsEmailAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.
- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

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
