---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsNetworkRegion
schema: 2.0.0
---

# Set-CsNetworkRegion

## SYNOPSIS
Modifies an existing network region.
Network regions represent network hubs or backbones in an enterprise network.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkRegion [[-Identity] <XdsGlobalRelativeIdentity>] [-AudioAlternatePath <Boolean>]
 [-BWAlternatePaths <PSListModifier>] [-BypassID <String>] [-CentralSite <String>] [-Description <String>]
 [-VideoAlternatePath <Boolean>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkRegion [-Instance <PSObject>] [-AudioAlternatePath <Boolean>] [-BWAlternatePaths <PSListModifier>]
 [-BypassID <String>] [-CentralSite <String>] [-Description <String>] [-VideoAlternatePath <Boolean>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A network region interconnects various parts of a network across multiple geographic areas.
Every network region must be associated with a central site.
The central site is the data center site on which the call admission control (CAC) bandwidth policy service is running.
Use this cmdlet to modify an existing network region, including settings that determine whether alternate paths are allowed for audio and video connections and that associate the sites within the region with a media bypass configuration.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkRegion -Identity NorthAmerica -Description "North American Region"
```

In this example the network region named NorthAmerica is modified.
The Description parameter is given a value of "North American Region." If a Description existed on the NorthAmerica region, this command overwrites it with this value.
If no Description had been set, this command sets it.


### -------------------------- Example 2 --------------------------
```
Set-CsNetworkRegion -Identity EMEA -VideoAlternatePath $False
```

This example modifies the network region named EMEA and gives it a new video alternate path setting.
To do this we call the `Set-CsNetworkRegion` cmdlet, passing an Identity of EMEA.
We then specify the VideoAlternatePath parameter, passing the value $False.
Setting VideoAlternatePath to False indicates that if adequate bandwidth is not available, the video call will not be routed to an alternate path; instead, it will simply not be completed.


### -------------------------- Example 3 --------------------------
```
$a = Get-CsNetworkRegion -Identity NorthAmerica

$a.BWAlternatePaths | foreach {Set-CsNetworkRegion -Identity Asia -BWAlternatePaths @{add=$_}}
```

Example 3 assigns the same set of alternate path settings to the Asia network region that has been set for the NorthAmerica region.
The first line in this example retrieves an instance of the network region NorthAmerica and assigns it to variable $a.
The second line begins by retrieving the contents of the BWAlternatePaths property or the NorthAmerica region (stored in variable $a): $a.BWAlternatePaths.
This will be a collection of all the alternate path settings in the NorthAmerica region.

The next thing we do is pipe that collection of settings to the foreach function.
Foreach will cycle through the collection one item at a time, performing the actions in the following curly braces.
In this case the action is to call the `Set-CsNetworkRegion` cmdlet with an Identity of Asia to set the properties of the Asia region.
The next parameter is BWAlternatePaths.
We pass the value @{add=$_} to this parameter.
The variable $_ represents the current item in the collection, in this case the current alternate path.
The @{add=} portion of the value adds that item to the collection of BWAlternatePaths for the Asia region.


## PARAMETERS

### -Identity
The unique identifier of the network region you want to modify.
The Identity will be in the form of a string that uniquely identifies that region.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to a network region object.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType and can be retrieved by calling the `Get-CsNetworkRegion` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AudioAlternatePath
This parameter determines whether audio calls will be routed through an alternate path if adequate bandwidth does not exist in the primary path.

This parameter populates the BWAlternatePaths property.
The value supplied to this parameter is stored in the AlternatePath property for the alternate path element with a BWPolicyModality value of Audio.

If you supply a value for this parameter you cannot specify a value for the BWAlternatePaths parameter.

If any of your calls will be Internet calls, this value must be True, regardless of bandwidth settings.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWAlternatePaths
A list of objects that contain information about whether alternate connection paths are allowed if a media request is unable to complete along the preferred path (for example, if limits on that path have been exceeded).
Alternate path objects must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWAlternatePathType.
You can create objects of this type by calling the `New-CsNetworkBWAlternatePath` cmdlet.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassID
A globally unique identifier (GUID).
This GUID is used to map network regions to media bypass settings within a CAC or Enhanced 9-1-1 (E9-1-1) network configuration.
(Use this BypassID value in the call to the `New-CsNetworkMediaBypassConfiguration` cmdlet.)

This parameter can be auto-generated when the region is created (by calling the `New-CsNetworkRegion` cmdlet).
Changing this value is not recommended.
If you do specify a value, it must be in the form of a GUID (for example, 3b24a047-dce6-48b2-9f20-9fbff17ed62a).
You will receive a confirmation prompting you to verify that you want to manually set this value.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CentralSite
The central site running the bandwidth policy service.
This service must be enabled in order to use CAC.
This service runs on the Front End Server or the Standard Edition server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A string that describes the region.
This parameter can be used to provide a more descriptive explanation of what the region is for than can be expressed by the Identity alone.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoAlternatePath
This parameter determines whether video calls will be routed through an alternate path if adequate bandwidth does not exist in the primary path.

This parameter populates the BWAlternatePaths property.
The value supplied to this parameter is stored in the AlternatePath property for the alternate path element with a BWPolicyModality value of Video.

If you supply a value for this parameter you cannot specify a value for the BWAlternatePaths parameter.

If any of your calls will be Internet calls, this value must be True, regardless of bandwidth settings.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType object.
Accepts pipelined input of network region objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType.

## NOTES

## RELATED LINKS

[New-CsNetworkRegion](New-CsNetworkRegion.md)

[Remove-CsNetworkRegion](Remove-CsNetworkRegion.md)

[Get-CsNetworkRegion](Get-CsNetworkRegion.md)

[New-CsNetworkBWAlternatePath](New-CsNetworkBWAlternatePath.md)
