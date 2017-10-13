---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsNetworkBWAlternatePath
schema: 2.0.0
---

# New-CsNetworkBWAlternatePath

## SYNOPSIS

Creates new settings that define whether media can be routed to alternate paths through the Internet for bandwidth-constrained connections.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsNetworkBWAlternatePath -AlternatePath <Boolean> -BWPolicyModality <BWPolicyModality> [<CommonParameters>]
```

## DESCRIPTION

Within a call admission control (CAC) configuration in Skype for Business Server, there are two possible modalities: audio and video.
Bandwidth limitations can be set on each of these modalities.
When bandwidth limitations will prevent a call from completing, it may be possible for the call to take an alternate path through the Internet that will enable the call to be established.
This cmdlet allows you to create the settings that define whether a call can be routed to an alternate path through the Internet based on modality.
The settings apply per region within the CAC configuration.

This cmdlet does not immediately save the newly created settings.
Instead, it creates the settings in memory.
To apply these settings to a region within the network, you need to assign the output of the cmdlet to a variable, and then use that variable as a value to the BWAlternatePaths parameter of the New-CsNetworkRegion cmdlet or the Set-CsNetworkRegion cmdlet.
Note that you can apply these settings directly by using the AudioAlternatePath and VideoAlternatePath parameters of the New-CsNetworkRegion cmdlet and the Set-CsNetworkRegion cmdlet, without having to call the New-CsNetworkBWAlternatePath cmdlet to create a new object.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$a = New-CsNetworkBWAlternatePath -BWPolicyModality "audio" -AlternatePath $true

New-CsNetworkRegion -Identity NorthAmerica -CentralSite Redmond-NA-MLS -BWAlternatePaths $a
```

This example creates a new network bandwidth alternate path and assigns those settings to a newly created region.
The first line in the example calls the New-CsNetworkBWAlternatePath cmdlet to create a new alternate path.
An alternate path has only two properties: BWPolicyModality, which must be set to either audio or video (in this example, audio is used); and AlternatePath, which must be either True or False (in this example, True is used).
We assign the output from this cmdlet, which is a reference to the alternate path object just created, to the variable $a.

In line 2 of this example we use this newly created alternate path in the creation of a new network region.
To do this we call the New-CsNetworkRegion cmdlet, passing an Identity of NorthAmerica.
We assign a value for the required parameter CentralSite (in this example the name of the central site for this region is Redmond-NA-MLS), and then we specify the BWAlternatePaths parameter, passing it the variable ($a) containing the alternate path object we just create.


## PARAMETERS

### -AlternatePath
Set the parameter to True to allow calls made in the media of the modality specified in the BWPolicyModality parameter (either audio or video) to be routed through an alternate path if adequate bandwidth does not exist in the primary path.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicyModality
The modality to which the alternate path setting applies.

Valid values: audio, video

Full data type: Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyModality

```yaml
Type: BWPolicyModality
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWAlternatePathType.

## NOTES

## RELATED LINKS

[New-CsNetworkRegion](New-CsNetworkRegion.md)

[Set-CsNetworkRegion](Set-CsNetworkRegion.md)
