---
applicable: Microsoft Teams
author: aditdalvi
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nakumar
Module Name: MicrosoftTeams
ms.author: aditd
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingapplication
schema: 2.0.0
title: Get-CsTeamsComplianceRecordingApplication
---

# Get-CsTeamsComplianceRecordingApplication

## SYNOPSIS
Returns information about the application instances of policy-based recording applications that have been configured for administering automatic policy-based recording in your tenant.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] [-Filter <String>]
 [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Policy-based recording applications are used in automatic policy-based recording scenarios.
Automatic policy-based recording is only applicable to Microsoft Teams users.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams recording policy are invited into the call or meeting to enforce compliance with the administrative set policy.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams recording policies.

Note that application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

Note that if neither the Identity nor the Filter parameters are specified, then Get-CsTeamsComplianceRecordingApplication returns all application instances of policy-based recording applications that are associated with a Teams recording policy.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.
Please also refer to the documentation of CsTeamsComplianceRecordingPolicy cmdlets for further information.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication
```

The command shown in Example 1 returns information for all the application instances of policy-based recording applications associated with Teams recording policies.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Identity 'Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144'
```

In Example 2, information is returned for a single application instance of a policy-based recording application with the Identity Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144.

### Example 3
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Filter 'Tag:*'
```

The command shown in Example 3 returns all the application instances associated with Teams recording policies at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "Tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "Tag:".

### Example 4
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Filter 'Tag:ContosoPartnerComplianceRecordingPolicy*'
```

The command shown in Example 4 returns all the application instances associated with Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.
To do this, the command uses the Filter parameter and the filter value "Tag:ContosoPartnerComplianceRecordingPolicy\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "Tag:ContosoPartnerComplianceRecordingPolicy".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more application instances of policy-based recording applications.
For example, to return all the application instances associated with Teams recording policies at the per-user scope, use this syntax:

-Filter "Tag:\*"

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -Identity
Unique identifier of the application instance of a policy-based recording application to be retrieved.

You cannot use wildcard characters when specifying the Identity.

Note that application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose Teams recording policies are being queried.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpolicy)

[Set-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscompliancerecordingpolicy)

[Remove-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingapplication)

[Remove-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingPairedApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpairedapplication)
