---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/en-us/powershell/module/skype/remove-csteamscompliancerecordingapplication?view=skype-ps
applicable: Skype for Business Online
title: Remove-CsTeamsComplianceRecordingApplication
schema: 2.0.0
manager: nakumar
author: aditd
ms.author: aditd
ms.reviewer:
---

# Remove-CsTeamsComplianceRecordingApplication

## SYNOPSIS
Deletes an existing association between an application instance of a policy-based recording application and a Teams compliance recording policy for administering automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

```
Remove-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
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
PS C:\> Remove-CsTeamsComplianceRecordingApplication -Identity 'Tag:ContosoPartnerComplianceRecordingPolicy/d93fefc7-93cc-4d44-9a5d-344b0fff2899'
```

The command shown in Example 1 deletes an existing association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams compliance recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingApplication | Remove-CsTeamsComplianceRecordingApplication
```

The command shown in Example 2 deletes all existing associations between application instances of policy-based recording applications and their corresponding Teams compliance recording policy.

## PARAMETERS

### -Identity
A name that uniquely identifies the application instance of the policy-based recording application.

Application instances of policy-based recording applications must be associated with a Teams compliance recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
To do this association correctly, the Identity of these application instances must be \<Identity of the associated Teams compliance recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams compliance recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

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

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csteamscompliancerecordingpolicy?view=skype-ps)

[New-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingpolicy?view=skype-ps)

[Set-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csteamscompliancerecordingpolicy?view=skype-ps)

[Grant-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csteamscompliancerecordingpolicy?view=skype-ps)

[Remove-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csteamscompliancerecordingpolicy?view=skype-ps)

[Get-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/get-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingapplication?view=skype-ps)

[Set-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/en-us/powershell/module/skype/set-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingPairedApplication](https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamscompliancerecordingpairedapplication?view=skype-ps)
