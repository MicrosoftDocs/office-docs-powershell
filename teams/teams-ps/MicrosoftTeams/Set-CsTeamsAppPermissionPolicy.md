---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: prkosh
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: mhayrapetyan
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsapppermissionpolicy
schema: 2.0.0
title: Set-CsTeamsAppPermissionPolicy
---

# Set-CsTeamsAppPermissionPolicy
Cmdlet to set the app permission policy for Teams.

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Set-CsTeamsAppPermissionPolicy [-Tenant <System.Guid>] [-DefaultCatalogApps <>] [-GlobalCatalogApps <>]
 [-PrivateCatalogApps <>] [-Description <String>] [-DefaultCatalogAppsType <String>]
 [-GlobalCatalogAppsType <String>] [-PrivateCatalogAppsType <String>] [[-Identity] <XdsIdentity>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsAppPermissionPolicy [-Tenant <System.Guid>] [-DefaultCatalogApps <>] [-GlobalCatalogApps <>]
 [-PrivateCatalogApps <>] [-Description <String>] [-DefaultCatalogAppsType <String>]
 [-GlobalCatalogAppsType <String>] [-PrivateCatalogAppsType <String>] [-Instance <PSObject>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app permission policies to enable or block specific apps for your users.  Learn more about the App Setup Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

## EXAMPLES

### Example 1

```powershell
$identity = "TestTeamsAppPermissionPolicy" + (Get-Date -Format FileDateTimeUniversal)
New-CsTeamsAppPermissionPolicy -Identity Set-$identity
Set-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType BlockedAppList  -DefaultCatalogApps @()-GlobalCatalogAppsType -GlobalCatalogApps @() BlockedAppList -PrivateCatalogAppsType BlockedAppList -PrivateCatalogApps @()
```
This example allows all Microsoft apps, third-party apps, and custom apps. No apps are blocked.

### Example 2

```powershell
$identity = "TestTeamsAppPermissionPolicy" + (Get-Date -Format FileDateTimeUniversal)
New-CsTeamsAppPermissionPolicy -Identity Set-$identity
Set-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType AllowedAppList -DefaultCatalogApps @() -GlobalCatalogAppsType AllowedAppList -GlobalCatalogApps @() -PrivateCatalogAppsType AllowedAppList -PrivateCatalogApps @()
```
This example blocks all Microsoft apps, third-party apps, and custom apps. No apps are allowed.

### Example 3

```powershell
$identity = "TestTeamsAppPermissionPolicy" + (Get-Date -Format FileDateTimeUniversal)
# create a new Teams app permission policy and block all apps
New-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType AllowedAppList -GlobalCatalogAppsType AllowedAppList -PrivateCatalogAppsType AllowedAppList -DefaultCatalogApps @() -GlobalCatalogApps @() -PrivateCatalogApps @()

$ListsApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.DefaultCatalogApp -Property @{Id="0d820ecd-def2-4297-adad-78056cde7c78"}
$OneNoteApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.DefaultCatalogApp -Property @{Id="26bc2873-6023-480c-a11b-76b66605ce8c"}
$DefaultCatalogAppList = @($ListsApp,$OneNoteApp)
# set allow Lists and OneNote apps and block other Microsoft apps
Set-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType AllowedAppList -DefaultCatalogApps $DefaultCatalogAppList
```
This example allows Microsoft Lists and OneNote apps and blocks other Microsoft apps. Microsoft Lists and OneNote can be installed by your users.

### Example 4

```powershell
$identity = "TestTeamsAppPermissionPolicy" + (Get-Date -Format FileDateTimeUniversal)
# create a new Teams app permission policy and block all apps
New-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType AllowedAppList -GlobalCatalogAppsType AllowedAppList -PrivateCatalogAppsType AllowedAppList -DefaultCatalogApps @() -GlobalCatalogApps @() -PrivateCatalogApps @()
$TaskListApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.GlobalCatalogApp -Property @{Id="57c81e84-9b7b-4783-be4e-0b7ffc0719af"}
$OnePlanApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.GlobalCatalogApp -Property @{Id="ca0540bf-6b61-3027-6313-a7cb4470bf1b"}
$GlobalCatalogAppList = @($TaskListApp,$OnePlanApp)
# set allow TaskList and OnePlan apps and block other Third-party apps
Set-CsTeamsAppPermissionPolicy -Identity Set-$identity -GlobalCatalogAppsType AllowedAppList -GlobalCatalogApps $GlobalCatalogAppList
```
This example allows third-party TaskList and OnePlan apps and blocks other third-party apps.  TaskList and OnePlan can be installed by your users.

### Example 5

```powershell
$identity = "TestTeamsAppPermissionPolicy" + (Get-Date -Format FileDateTimeUniversal)
# create a new Teams app permission policy and block all apps
New-CsTeamsAppPermissionPolicy -Identity Set-$identity -DefaultCatalogAppsType BlockedAppList -GlobalCatalogAppsType BlockedAppList -PrivateCatalogAppsType BlockedAppList -DefaultCatalogApps @() -GlobalCatalogApps @() -PrivateCatalogApps @()
$GetStartApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PrivateCatalogApp -Property @{Id="f8374f94-b179-4cd2-8343-9514dc5ea377"}
$TestBotApp = New-Object -TypeName Microsoft.Teams.Policy.Administration.Cmdlets.Core.PrivateCatalogApp -Property @{Id="47fa3584-9366-4ce7-b1eb-07326c6ba799"}
$PrivateCatalogAppList = @($GetStartApp,$TestBotApp)
# set allow TaskList and OnePlan apps and block other custom apps
Set-CsTeamsAppPermissionPolicy -Identity Set-$identity -PrivateCatalogAppsType AllowedAppList -PrivateCatalogApps $PrivateCatalogAppList
```
This example allows custom GetStartApp and TestBotApp apps and blocks other custom apps. GetStartApp and TestBotApp can be installed by your users.

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

### -DefaultCatalogApps
Choose which Teams apps published by Microsoft or its partners can be installed by your users.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.DefaultCatalogApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultCatalogAppsType
Choose to allow or block the installation of Microsoft apps. Values that can be used: AllowedAppList, BlockedAppList.

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

### -Description
Description of app setup permission policy.

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
Do not use.

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

### -GlobalCatalogApps
Choose which Teams apps published by a third party can be installed by your users.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.GlobalCatalogApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalogAppsType
Choose to allow or block the installation of third-party apps. Values that can be used: AllowedAppList, BlockedAppList.

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

### -Identity
Name of App setup permission policy. If empty, all Identities will be used by default.

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

### -Instance
Do not use.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PrivateCatalogApps
Choose to allow or block the installation of custom apps.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.PrivateCatalogApp[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateCatalogAppsType
Choose which custom apps can be installed by your users. Values that can be used: AllowedAppList, BlockedAppList.

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

### -Tenant
Do not use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.Policy.Administration.Cmdlets.Core.DefaultCatalogApp
### Microsoft.Teams.Policy.Administration.Cmdlets.Core.GlobalCatalogApp
### Microsoft.Teams.Policy.Administration.Cmdlets.Core.PrivateCatalogApp

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
