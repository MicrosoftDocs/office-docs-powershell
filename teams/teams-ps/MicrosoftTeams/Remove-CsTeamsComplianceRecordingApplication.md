---
applicable: Microsoft Teams
author: aditdalvi
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nakumar
Module Name: MicrosoftTeams
ms.author: aditd
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingapplication
schema: 2.0.0
title: Remove-CsTeamsComplianceRecordingApplication
---

# Remove-CsTeamsComplianceRecordingApplication

## SYNOPSIS
Deletes an existing association between an application instance of a policy-based recording application and a Teams recording policy for administering automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

```
Remove-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Policy-based recording applications are used in automatic policy-based recording scenarios.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams recording policy are invited into the call or meeting to enforce compliance with the administrative set policy.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams recording policies.

Note that application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.
Please also refer to the documentation of CsTeamsComplianceRecordingPolicy cmdlets for further information.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsComplianceRecordingApplication -Identity 'Tag:ContosoPartnerComplianceRecordingPolicy/d93fefc7-93cc-4d44-9a5d-344b0fff2899'
```

The command shown in Example 1 deletes an existing association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication | Remove-CsTeamsComplianceRecordingApplication
```

The command shown in Example 2 deletes all existing associations between application instances of policy-based recording applications and their corresponding Teams compliance recording policy.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Identity
A name that uniquely identifies the application instance of the policy-based recording application.

Application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
To do this association correctly, the Identity of these application instances must be \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams compliance recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpolicy)

[Set-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscompliancerecordingpolicy)

[Remove-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingpolicy)

[Get-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingPairedApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpairedapplication)
