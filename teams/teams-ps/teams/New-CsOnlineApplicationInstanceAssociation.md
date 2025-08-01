---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlineapplicationinstanceassociation
applicable: Microsoft Teams
title: New-CsOnlineApplicationInstanceAssociation
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsOnlineApplicationInstanceAssociation

## SYNOPSIS
Use the New-CsOnlineApplicationInstanceAssociation cmdlet to associate either a single or multiple application instances with an application configuration, like auto attendant or call queue.

## SYNTAX

```
New-CsOnlineApplicationInstanceAssociation -Identities <String[]> -ConfigurationId <String> -ConfigurationType <Object> [-CallPriority <Int16>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineApplicationInstanceAssociation cmdlet associates either a single or multiple application instances with an application configuration, like auto attendant or call queue. When an association is created between an application instance and an application configuration, calls reaching that application instance would be handled based on the associated application configuration. For more information on how to create _Application Instances_, check `New-CsOnlineApplicationInstance` cmdlet documentation.

You can get the Identity of the application instance from the ObjectId of the AD object.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$applicationInstanceId = (Get-CsOnlineUser "main_auto_attendant@contoso.com").ObjectId      # 76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19
$autoAttendantId = (Get-CsAutoAttendant -NameFilter "Main Auto Attendant").Id               # c2ee3e18-b738-5515-a97b-46be52dfc057

New-CsOnlineApplicationInstanceAssociation -Identities @($applicationInstanceId) -ConfigurationId $autoAttendantId -ConfigurationType AutoAttendant

Get-CsAutoAttendant -Identity $autoAttendantId

# Id                       : c2ee3e18-b738-5515-a97b-46be52dfc057
# TenantId                 : 977c9d5b-2dae-5d82-aada-628bc1c14213
# Name                     : Main Auto Attendant
# LanguageId               : en-US
# VoiceId                  : Female
# DefaultCallFlow          : Default Call Flow
# Operator                 :
# TimeZoneId               : Pacific Standard Time
# VoiceResponseEnabled     : False
# CallFlows                :
# Schedules                :
# CallHandlingAssociations :
# Status                   :
# DialByNameResourceId     :
# DirectoryLookupScope     :
# ApplicationInstances     : {76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19}
```

This example creates an association between an application instance that we have already created with UPN "main_auto_attendant@contoso.com" whose identity is "76afc66a-5fe9-4a3d-ab7a-37c0e37b1f19", and an auto attendant configuration that we created with display name "Main Auto Attendant" whose identity is "c2ee3e18-b738-5515-a97b-46be52dfc057". Once the association is created, the newly associated application instance would be listed under the `ApplicationInstances` property of the AA.

### -------------------------- Example 2 --------------------------
```powershell
$applicationInstancesIdentities = (Find-CsOnlineApplicationInstance -SearchQuery "tel:+1206") | Select-Object -Property Id

# Id
# --
# fa2f17ec-ebd5-43f8-81ac-959c245620fa
# 56421bbe-5649-4208-a60c-24dbeded6f18
# c7af9c3c-ae40-455d-a37c-aeec771e623d

$autoAttendantId = (Get-CsAutoAttendant -NameFilter "Main Auto Attendant").Id   # c2ee3e18-b738-5515-a97b-46be52dfc057

New-CsOnlineApplicationInstanceAssociation -Identities $applicationInstancesIdentities -ConfigurationId $autoAttendantId -ConfigurationType AutoAttendant

Get-CsAutoAttendant -Identity $autoAttendantId

# Id                       : c2ee3e18-b738-5515-a97b-46be52dfc057
# TenantId                 : 977c9d5b-2dae-5d82-aada-628bc1c14213
# Name                     : Main Auto Attendant
# LanguageId               : en-US
# VoiceId                  : Female
# DefaultCallFlow          : Default Call Flow
# Operator                 :
# TimeZoneId               : Pacific Standard Time
# VoiceResponseEnabled     : False
# CallFlows                :
# Schedules                :
# CallHandlingAssociations :
# Status                   :
# DialByNameResourceId     :
# DirectoryLookupScope     :
# ApplicationInstances     : {fa2f17ec-ebd5-43f8-81ac-959c245620fa, 56421bbe-5649-4208-a60c-24dbeded6f18, c7af9c3c-ae40-455d-a37c-aeec771e623d}
```

This example creates an association between multiple application instances that we had created before and to which we assigned phone numbers starting with "tel:+1206", and an auto attendant configuration that we created with display name "Main Auto Attendant" whose identity is "c2ee3e18-b738-5515-a97b-46be52dfc057". Once the associations are created,  the newly associated application instances would listed under the `ApplicationInstances` property of the AA.

### -------------------------- Example 3 --------------------------
```powershell
$applicationInstancesIdentities = (Find-CsOnlineApplicationInstance -SearchQuery "Main Auto Attendant") | Select-Object -Property Id

# Id
# --
# fa2f17ec-ebd5-43f8-81ac-959c245620fa
# 56421bbe-5649-4208-a60c-24dbeded6f18
# c7af9c3c-ae40-455d-a37c-aeec771e623d

$autoAttendantId = (Get-CsAutoAttendant -NameFilter "Main Auto Attendant").Id   # c2ee3e18-b738-5515-a97b-46be52dfc057

New-CsOnlineApplicationInstanceAssociation -Identities $applicationInstancesIdentities -ConfigurationId $autoAttendantId -ConfigurationType AutoAttendant
```

This example creates an association between multiple application instances that we had created before with display name starting with "Main Auto Attendant", and an auto attendant configuration that we created with display name "Main Auto Attendant" whose identity is "c2ee3e18-b738-5515-a97b-46be52dfc057".

## PARAMETERS

### -Identities
The Identities parameter is the identities of application instances to be associated with the provided configuration ID.

```yaml
Type: System.String[]
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationId
The ConfigurationId parameter is the identity of the configuration that would be associated with the provided application instances.

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationType
The ConfigurationType parameter denotes the type of the configuration that would be associated with the provided application instances.

It can be one of two values:

- AutoAttendant
- CallQueue

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallPriority
The call priority assigned to calls arriving on this application instance if a priority has not already been assigned.

PARAMVALUE: 1 | 2 | 3 | 4 | 5

1 = Very High
2 = High
3 = Normal / Default
4 = Low
5 = Very Low

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 3
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.AssociationOperationOutput

## NOTES

## RELATED LINKS

[Get-CsOnlineApplicationInstanceAssociation](https://learn.microsoft.com/powershell/module/teams/get-csonlineapplicationinstanceassociation)

[Get-CsOnlineApplicationInstanceAssociationStatus](https://learn.microsoft.com/powershell/module/teams/get-csonlineapplicationinstanceassociationstatus)

[Remove-CsOnlineApplicationInstanceAssociation](https://learn.microsoft.com/powershell/module/teams/remove-csonlineapplicationinstanceassociation)
