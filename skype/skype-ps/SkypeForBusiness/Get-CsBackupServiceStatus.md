---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/get-csbackupservicestatus
schema: 2.0.0
title: Get-CsBackupServiceStatus
---

# Get-CsBackupServiceStatus

## SYNOPSIS
Returns information about the current state of the backup service for a specified pool.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsBackupServiceStatus -PoolFqdn <Fqdn> [-Category <BackupCategory>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsBackupServiceStatus cmdlet enables administrators to verify that the backup service for a specified Registrar pool has been configured and is working properly.
Note that, by default, only users who belong to the RTCUniversalServerAdmins group are allowed to run this cmdlet and check the backup status for a pool.
To provide additional groups with permission to run the cmdlet, use the Set-CsBackupServiceConfiguration cmdlet to add those groups to the AuthorizedUniversalGroups property.

The functions carried out by the Get-CsBackupServiceStatus cmdlet are not available in the Skype for Business Server.


## EXAMPLES

### Example 1
```
Get-CsBackupServiceStatus -PoolFqdn "atl-cs-001.litwareinc.com"
```

The preceding command returns the backup service status for the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -Category

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Type of backup whose status is being checked.
Allowed values are:

* CMS
* UserData
* RGS

If this parameter is not specified then all three backup types will be checked.

```yaml
Type: BackupCategory
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -PoolFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the pool whose backup service status is being checked.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### System.Object
Returns information about the backup service.


## NOTES


## RELATED LINKS

[Get-CsBackupServiceConfiguration](Get-CsBackupServiceConfiguration.md)
