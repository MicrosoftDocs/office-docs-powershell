---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/en-us/powershell/module/skype/get-csteamscompliancerecordingapplication?view=skype-ps
applicable: Skype for Business Online
title: Get-CsTeamsComplianceRecordingApplication
schema: 2.0.0
manager: nakumar
author: aditd
ms.author: aditd
ms.reviewer:
---

# Get-CsTeamsComplianceRecordingApplication

## SYNOPSIS
Returns information about the application instances of policy-based recording applications that have been configured for administering automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

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
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams compliance recording policy are invited into the call or meeting to record audio, video and video-based screen sharing activity.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams compliance recording policies.

Note that application instances of policy-based recording applications must be associated with a Teams compliance recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams compliance recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams compliance recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.
Please also refer to the documentation of CsTeamsComplianceRecordingPolicy cmdlets for further information.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication
```

The command shown in Example 1 returns information for all the application instances of policy-based recording applications associated with Teams compliance recording policies.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Identity tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144
```

In Example 2, information is returned for a single application instance of a policy-based recording application with the Identity tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144.

### Example 3
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Filter "tag:*"
```

The command shown in Example 3 returns all the application instances associated with Teams compliance recording policies at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

### Example 4
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication -Filter "tag:ContosoPartnerComplianceRecordingPolicy*"
```

The command shown in Example 4 returns all the application instances associated with Teams compliance recording policy with Identity ContosoPartnerComplianceRecordingPolicy.
To do this, the command uses the Filter parameter and the filter value "tag:ContosoPartnerComplianceRecordingPolicy\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:ContosoPartnerComplianceRecordingPolicy".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more application instances of policy-based recording applications.
For example, to return all the application instances associated with Teams compliance recording policies at the per-user scope, use this syntax:

-Filter "tag:\*"

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

If neither the Identity nor the Filter parameters are specified, then \`Get-CsTeamsComplianceRecordingApplication\` returns all application instances of policy-based recording applications that are associated with a Teams compliance recording policy.

Note that application instances of policy-based recording applications must be associated with a Teams compliance recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams compliance recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams compliance recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

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
Globally unique identifier (GUID) of the tenant account whose Teams compliance recording policies are being queried.
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

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csteamscompliancerecordingpolicy?view=skype-ps)

[New-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingpolicy?view=skype-ps)

[Set-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csteamscompliancerecordingpolicy?view=skype-ps)

[Grant-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csteamscompliancerecordingpolicy?view=skype-ps)

[Remove-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csteamscompliancerecordingpolicy?view=skype-ps)

[New-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingapplication?view=skype-ps)

[Set-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/set-csteamscompliancerecordingapplication?view=skype-ps)

[Remove-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingPairedApplication](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingpairedapplication?view=skype-ps)
