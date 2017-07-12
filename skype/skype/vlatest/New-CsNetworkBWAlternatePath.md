---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsNetworkBWAlternatePath

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates new settings that define whether media can be routed to alternate paths through the Internet for bandwidth-constrained connections.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates new settings that define whether media can be routed to alternate paths through the Internet for bandwidth-constrained connections.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsNetworkBWAlternatePath -AlternatePath <Boolean> -BWPolicyModality <BWPolicyModality> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Within a call admission control (CAC) configuration in Microsoft Lync Server 2010, there are two possible modalities: audio and video.
Bandwidth limitations can be set on each of these modalities.
When bandwidth limitations will prevent a call from completing, it may be possible for the call to take an alternate path through the Internet that will enable the call to be established.
This cmdlet allows you to create the settings that define whether a call can be routed to an alternate path through the Internet based on modality.
The settings apply per region within the CAC configuration.

This cmdlet does not immediately save the newly created settings.
Instead, it creates the settings in memory.
To apply these settings to a region within the network, you need to assign the output of the cmdlet to a variable, and then use that variable as a value to the BWAlternatePaths parameter of the New-CsNetworkRegion or Set-CsNetworkRegion cmdlet.
Note that you can apply these settings directly by using the AudioAlternatePath and VideoAlternatePath parameters of the New-CsNetworkRegion and Set-CsNetworkRegion cmdlets, without having to call New-CsNetworkBWAlternatePath to create a new object.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkBWAlternatePath cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkBWAlternatePath"}

**Below Content Applies To:** Lync Server 2013

Within a call admission control (CAC) configuration in Lync Server, there are two possible modalities: audio and video.
Bandwidth limitations can be set on each of these modalities.
When bandwidth limitations will prevent a call from completing, it may be possible for the call to take an alternate path through the Internet that will enable the call to be established.
This cmdlet allows you to create the settings that define whether a call can be routed to an alternate path through the Internet based on modality.
The settings apply per region within the CAC configuration.

This cmdlet does not immediately save the newly created settings.
Instead, it creates the settings in memory.
To apply these settings to a region within the network, you need to assign the output of the cmdlet to a variable, and then use that variable as a value to the BWAlternatePaths parameter of the New-CsNetworkRegion or Set-CsNetworkRegion cmdlet.
Note that you can apply these settings directly by using the AudioAlternatePath and VideoAlternatePath parameters of the New-CsNetworkRegion and Set-CsNetworkRegion cmdlets, without having to call New-CsNetworkBWAlternatePath to create a new object.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkBWAlternatePath cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkBWAlternatePath"}

**Below Content Applies To:** Skype for Business Server 2015

Within a call admission control (CAC) configuration in Skype for Business Server 2015, there are two possible modalities: audio and video.
Bandwidth limitations can be set on each of these modalities.
When bandwidth limitations will prevent a call from completing, it may be possible for the call to take an alternate path through the Internet that will enable the call to be established.
This cmdlet allows you to create the settings that define whether a call can be routed to an alternate path through the Internet based on modality.
The settings apply per region within the CAC configuration.

This cmdlet does not immediately save the newly created settings.
Instead, it creates the settings in memory.
To apply these settings to a region within the network, you need to assign the output of the cmdlet to a variable, and then use that variable as a value to the BWAlternatePaths parameter of the New-CsNetworkRegion cmdlet or the Set-CsNetworkRegion cmdlet.
Note that you can apply these settings directly by using the AudioAlternatePath and VideoAlternatePath parameters of the New-CsNetworkRegion cmdlet and the Set-CsNetworkRegion cmdlet, without having to call the New-CsNetworkBWAlternatePath cmdlet to create a new object.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$a = New-CsNetworkBWAlternatePath -BWPolicyModality "audio" -AlternatePath $true
New-CsNetworkRegion -Identity NorthAmerica -CentralSite Redmond-NA-MLS -BWAlternatePaths $a
```

This example creates a new network bandwidth alternate path and assigns those settings to a newly created region.
The first line in the example calls the New-CsNetworkBWAlternatePath cmdlet to create a new alternate path.
An alternate path has only two properties: BWPolicyModality, which must be set to either audio or video (in this example, audio is used); and AlternatePath, which must be either True or False (in this example, True is used).
We assign the output from this cmdlet, which is a reference to the alternate path object just created, to the variable $a.

In line 2 of this example we use this newly created alternate path in the creation of a new network region.
To do this we call New-CsNetworkRegion, passing an Identity of NorthAmerica.
We assign a value for the required parameter CentralSite (in this example the name of the central site for this region is Redmond-NA-MLS), and then we specify the BWAlternatePaths parameter, passing it the variable ($a) containing the alternate path object we just create.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new network bandwidth alternate path and assigns those settings to a newly created region.
The first line in the example calls the New-CsNetworkBWAlternatePath cmdlet to create a new alternate path.
An alternate path has only two properties: BWPolicyModality, which must be set to either audio or video (in this example, audio is used); and AlternatePath, which must be either True or False (in this example, True is used).
We assign the output from this cmdlet, which is a reference to the alternate path object just created, to the variable $a.

In line 2 of this example we use this newly created alternate path in the creation of a new network region.
To do this we call New-CsNetworkRegion, passing an Identity of NorthAmerica.
We assign a value for the required parameter CentralSite (in this example the name of the central site for this region is Redmond-NA-MLS), and then we specify the BWAlternatePaths parameter, passing it the variable ($a) containing the alternate path object we just create.

$a = New-CsNetworkBWAlternatePath -BWPolicyModality "audio" -AlternatePath $true

New-CsNetworkRegion -Identity NorthAmerica -CentralSite Redmond-NA-MLS -BWAlternatePaths $a

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new network bandwidth alternate path and assigns those settings to a newly created region.
The first line in the example calls the New-CsNetworkBWAlternatePath cmdlet to create a new alternate path.
An alternate path has only two properties: BWPolicyModality, which must be set to either audio or video (in this example, audio is used); and AlternatePath, which must be either True or False (in this example, True is used).
We assign the output from this cmdlet, which is a reference to the alternate path object just created, to the variable $a.

In line 2 of this example we use this newly created alternate path in the creation of a new network region.
To do this we call the New-CsNetworkRegion cmdlet, passing an Identity of NorthAmerica.
We assign a value for the required parameter CentralSite (in this example the name of the central site for this region is Redmond-NA-MLS), and then we specify the BWAlternatePaths parameter, passing it the variable ($a) containing the alternate path object we just create.

$a = New-CsNetworkBWAlternatePath -BWPolicyModality "audio" -AlternatePath $true

New-CsNetworkRegion -Identity NorthAmerica -CentralSite Redmond-NA-MLS -BWAlternatePaths $a

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWAlternatePathType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9017378e-4583-42bc-9572-aa8e9571cfe3(OCS.14).aspx)

[New-CsNetworkRegion]()

[Set-CsNetworkRegion]()

[Online Version](http://technet.microsoft.com/EN-US/library/9017378e-4583-42bc-9572-aa8e9571cfe3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9017378e-4583-42bc-9572-aa8e9571cfe3(OCS.16).aspx)

