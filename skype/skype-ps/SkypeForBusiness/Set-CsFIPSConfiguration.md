---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csfipsconfiguration
schema: 2.0.0
title: Set-CsFIPSConfiguration
---

# Set-CsFIPSConfiguration

## SYNOPSIS
Modifies an existing collection of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsFIPSConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-RequireFIPSCompliantMedia <Boolean>]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsFIPSConfiguration [-Confirm] [-Force] [-Instance <PSObject>] [-RequireFIPSCompliantMedia <Boolean>]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See https://www.itl.nist.gov/fipspubs/by-num.htm (https://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Skype for Business Server provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Skype for Business Server.

Keep in mind, however, that, for the on-premises version of Skype for Business Server, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Skype for Business Server implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Skype for Business Server.

The `Set-CsFIPSConfiguration` cmdlet is used to enable or disable FIPS compliance.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsFIPSConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Set-CsFIPSConfiguration -Identity "global" -RequireFIPSCompliantMedia $True
```

In Example 1, the RequireFIPSCompliantMedia property of the global FIPS configuration settings is set to True ($True).


## PARAMETERS

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

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique Identity of the FIPS configuration settings to be modified.
Because Skype for Business Server only supports a single, global collection of FIPS settings, the only collection that can be modified is the global collection:

`-Identity global`

If you do not include this parameter the `Set-CsFIPSConfiguration` cmdlet will modify the global collection.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### -RequireFIPSCompliantMedia

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When set to True will Skype for Business Server only allow media sessions with entities that use FIPS compliant algorithms for authentication and authorization.

Note that, if you require FIPS compliance, then your users will no longer be able to connect to your system by using a Microsoft Lync Server 2010 A/V Edge server.
Instead, you will need to upgrade all your Edge servers to Skype for Business Server.

The default value is False.


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

### -Tenant

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the FIPS configuration settings are being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

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

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

executed the command without actually executing the command.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration
The `Set-CsFIPSConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## OUTPUTS

### None
Instead, the `Set-CsFIPSConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsFIPSConfiguration](Get-CsFIPSConfiguration.md)

[New-CsFIPSConfiguration](New-CsFIPSConfiguration.md)

[Remove-CsFIPSConfiguration](Remove-CsFIPSConfiguration.md)
