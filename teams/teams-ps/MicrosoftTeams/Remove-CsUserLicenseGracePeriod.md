---
author: serdarsoysal
description: This cmdlet expedites the delicensing operation for an account's assigned plans by removing the grace period, permanently deleting the assigned plans.
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
ms.date: 02/01/2024
online version: https://learn.microsoft.com/powershell/module/skype/remove-csuserlicensegraceperiod
schema: 2.0.0
title: Remove-CsUserLicenseGracePeriod
---

# Remove-CsUserLicenseGracePeriod

## SYNOPSIS

The `CsUserLicenseGracePeriod` cmdlet expedites the delicensing operation for the assigned plan(s) of a user/resource account by removing the grace period, permanently deleting the assigned plan(s).
Note that this cmdlet is to be used only by tenants with license resiliency enabled. (License resiliency is currently under private preview and not available for everyone.)

## SYNTAX

```powershell
Remove-CsUserLicenseGracePeriod
[-Identity] <String>
[-Capability <String>]
-InputObject <IConfigApiBasedCmdletsIdentity>
[-Action <String>]
-Body <IUserDelicensingAccelerationPatch>
[-PassThru]
[-Force]
[-WhatIf]
[-Confirm]
[<CommonParameters>]
```

## DESCRIPTION

The command removes the grace period of the assigned plan(s) against the specified user(s)/resource account(s), permanently deleting the plan(s).
Permanently deletes all/specified plans belonging to the user, which has a grace period assosciated with it.
Assigned plans with no subsequent grace period will see no change.

If you want to verify the grace period of any assigned plan against a user, you can return that information by using this command:

`Get-CsOnlineUser -Identity bf19b7db-6960-41e5-a139-2aa373474354`

## EXAMPLES

### Example 1

```powershell
Remove-CsUserLicenseGracePeriod -Identity bf19b7db-6960-41e5-a139-2aa373474354
```

In Example 1, the command removes the grace period of all assigned plan(s) against the specified user ID, marking the subsequent assigned plan(s) as deleted. Assigned plans with no subsequent grace period will see no change.

### Example 2

```powershell
Remove-CsUserLicenseGracePeriod -Identity bf19b7db-6960-41e5-a139-2aa373474354 -Capability 'MCOEV,MCOMEETADD'
```

In Example 2, the capability specified refers to plans assigned to the user(s) under AssignedPlans. The command removes the grace period of the specified assigned plans, marking the subsequent plan(s) as deleted.

## PARAMETERS

### -Action

Used to specify which action should be taken.

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

### -Body

Specifies the body of the request.

```yaml
Type: IUserDelicensingAccelerationPatch
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Capability

Denotes the plan(s) assigned to the specified user, which are to be permanently deleted if they are currently serving their grace period.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName,ByValue)
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
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Specifies the Identity (GUID) of the user account whose assigned plan grace period needs to be removed, permanently deleting the subsequent plan.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName,ByValue)
Accept wildcard characters: False
```

### -InputObject

The Identity parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PassThru

Returns the results of the command. By default, this cmdlet does not generate any output.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsOnlineUser](https://learn.microsoft.com/powershell/module/teams/get-csonlineuser)
