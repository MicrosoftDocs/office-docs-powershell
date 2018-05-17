---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsClsRegion
schema: 2.0.0
---

# Set-CsClsRegion

## SYNOPSIS
Modifies an existing centralized logging configuration region.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsClsRegion [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-OtherRegionAccess <String>]
 [-SecurityGroupSuffix <String>] [-Sites <String>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsClsRegion [-Confirm] [-Force] [-Instance <PSObject>] [-OtherRegionAccess <String>]
 [-SecurityGroupSuffix <String>] [-Sites <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

With Skype for Business Online, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the `New-CsClsRegion` cmdlet and then are added to a collection of centralized logging configuration settings.
After they have been created, you can modify the properties of these regions by using the `Set-CsClsRegion` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsClsRegion` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsClsRegion -Identity "global/US" -SecurityGroupSuffix "USSupport"
```

The command shown in Example 1 changes the security group suffix for the region global/US to USSupport.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the region.
Region Identities consist of the centralized logging configuration scope where the region was created plus a unique region name.
For example, to refer to a global region named Redmond use this syntax:

`-Identity "global/Redmond"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -OtherRegionAccess
Name of an additional region that can be accessed by authorized users for this region.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecurityGroupSuffix
Suffix to be added to the end of the name of any security group that will be authorized for this region.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sites
Sites contained within this region.
These correspond to the SideId attribute values in the topology document.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsClsRegion` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClsRegion` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsRegion](Get-CsClsRegion.md)

[New-CsClsRegion](New-CsClsRegion.md)

[Remove-CsClsRegion](Remove-CsClsRegion.md)

