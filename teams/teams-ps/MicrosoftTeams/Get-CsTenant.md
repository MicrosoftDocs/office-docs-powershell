---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-cstenant
schema: 2.0.0
title: Get-CsTenant
---

# Get-CsTenant

## SYNOPSIS
Returns information about the Microsoft Teams or Skype for Business Online tenants that have been configured for use in your organization.
Tenants represent groups of online users.

## SYNTAX

```
Get-CsTenant [-Filter <String>] [-DomainController <Fqdn>] [[-Identity] <OUIdParameter>] [-ResultSize <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Teams or Skype for Business Online, tenants are groups of users who have accounts homed on the service. Organizations will typically have a single tenant in which to house all their user accounts.

In the Teams PowerShell Module version 3.0.0 or later, the following attributes have been deprecated for organizations with Teams users:

- AdminDescription
- AllowedDataLocation
- AssignedLicenses
- DefaultDataLocation
- DefaultPoolFqdn
- Description
- DisableExoPlanProvisioning
- DistinguishedName
- DomainUrlMap
- ExperiencePolicy
- Guid
- HostedVoiceMail
- HostedVoiceMailNotProvisioned
- Id
- Identity
- IsByPassValidation
- IsMNC
- IsO365MNC
- IsReadinessUploaded
- IsUpgradeReady
- IsValid
- LastSubProvisionTimeStamp
- MNCEnableTimeStamp
- Name
- NonPrimarySource
- ObjectCategory
- ObjectClass
- ObjectId
- ObjectState
- OcoDomainTracked
- OnPremisesImmutableId
- OnPremisesUserPrincipalName
- OnPremSamAccountName
- OnPremSecurityIdentifier
- OriginalRegistrarPool
- OriginatingServer
- PendingDeletion
- Phone
- ProvisioningCounter
- ProvisioningStamp
- ProvisionType
- PublicProvider
- PublishingCounter
- PublishingStamp
- RegistrarPool
- RemoteMachine
- SubProvisioningCounter
- SubProvisioningStamp
- SyncingCounter
- TeamsUpgradeEligible
- TelehealthEnabled
- TenantNotified
- TenantPoolExtension
- UpgradeRetryCounter
- UserRoutingGroupIds
- XForestMovePolicy

In the Teams PowerShell Module version 3.0.0 or later, the following attributes have been renamed for TeamsOnly customers:

- CountryAbbreviation is now CountryLetterCode
- CountryOrRegionDisplayName is now Country
- StateOrProvince is now State

## EXAMPLES

### Example 1
```
Get-CsTenant
```

The command shown in Example 1 returns information about your tenant.
Organizations will have only one tenant.

## PARAMETERS

### -DomainController
This parameter is not used with Skype for Business Online and will be deprecated in the near future.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

Enables you to return data by using Active Directory attributes and without having to specify the full Active Directory distinguished name.
For example, to retrieve a tenant by using the tenant display name, use syntax similar to this:

Get-CsTenant -Filter {DisplayName -eq "FabrikamTenant"}

To return all tenants that use a Fabrikam domain use this syntax:

Get-CsTenant -Filter {Domains -like "*fabrikam*"}

The Filter parameter uses the same Windows PowerShell filtering syntax is used by the `Where-Object` cmdlet.

You cannot use both the Identity parameter and the Filter parameter in the same command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

Unique identifier for the tenant.
For example:

-Identity "bf19b7db-6960-41e5-a139-2aa373474354"

If you do not include either the Identity or the Filter parameter then the `Get-CsTenant` cmdlet will return information about all your tenants.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

Enables you to limit the number of records returned by the cmdlet.
For example, to return seven tenants (regardless of the number of tenants that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which 7 users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the tenants to 7 but you have only three contacts in your forest, the command will return those three tenants and then complete without error.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.TenantObject or String
The `Get-CsTenant` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.TenantObject object as well as string values representing the Identity of the tenant (for example "bf19b7db-6960-41e5-a139-2aa373474354").

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.TenantObject

## NOTES

## RELATED LINKS
