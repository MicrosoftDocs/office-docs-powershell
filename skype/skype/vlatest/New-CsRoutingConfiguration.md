---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

This cmdlet can return an object containing the default settings for a routing configuration object.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

This cmdlet returns an object containing the default settings for a routing configuration object.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRoutingConfiguration [-Identity] <XdsIdentity> [-Route <PSListModifier>] [-Force] [-InMemory] [-WhatIf]
 [-Confirm] [-CallViaWorkCallerId <String>] [-EnableLocationBasedRouting <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

A routing configuration is a container for all voice routes defined within a Microsoft Lync Server 2010 deployment.
To create a new voice route, use the New-CsVoiceRoute cmdlet.

A routing configuration can be defined only at the global level.
In addition, you cannot have individually named routing configurations; there is only one voice route list for the entire Lync Server 2010 deployment.
In the Lync Server 2010 implementation of Windows PowerShell, if you try to create an object that already exists by calling a cmdlet beginning with the New verb, you'll receive an error message.
Every implementation of Lync Server 2010 includes a default routing configuration object with a Global Identity.
What this means is that the only voice route list that could be created already exists.
So a call to New-CsRoutingConfiguration will always return an error message and will not create a new routing configuration.

The only exception to this is if you specify the InMemory parameter in the call to this cmdlet.
This command will create an object only in memory that contains a default list of voice routes.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

A routing configuration is a container for all voice routes defined within a Lync Server deployment.
To create a new voice route, use the New-CsVoiceRoute cmdlet.

A routing configuration can be defined only at the global level.
In addition, you cannot have individually named routing configurations; there is only one voice route list for the entire Lync Server deployment.
In the Lync Server implementation of Windows PowerShell, if you try to create an object that already exists by calling a cmdlet beginning with the New verb, you'll receive an error message.
Every implementation of Lync Server includes a default routing configuration object with a Global Identity.
What this means is that the only voice route list that could be created already exists.
So a call to New-CsRoutingConfiguration will always return an error message and will not create a new routing configuration.

The only exception to this is if you specify the InMemory parameter in the call to this cmdlet.
This command will create an object only in memory that contains a default list of voice routes.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

A routing configuration is a container for all voice routes defined within a Skype for Business Server 2015 deployment.
To create a new voice route, use the New-CsVoiceRoute cmdlet.

A routing configuration can be defined only at the global level.
In addition, you cannot have individually named routing configurations; there is only one voice route list for the entire Skype for Business Server 2015 deployment.
In the Skype for Business Server 2015 implementation of Windows PowerShell, if you try to create an object that already exists by calling a cmdlet beginning with the New verb, you'll receive an error message.
Every implementation of Skype for Business Server 2015 includes a default routing configuration object with a Global Identity.
What this means is that the only voice route list that could be created already exists.
So a call to the New-CsRoutingConfiguration cmdlet will always return an error message and will not create a new routing configuration.

The only exception to this is if you specify the InMemory parameter in the call to this cmdlet.
This command will create an object only in memory that contains a default list of voice routes.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$x = New-CsRoutingConfiguration -Identity global -InMemory
```

This command creates an object containing the default routing configuration values and assigns that object to the variable $x.
Any other use of this cmdlet will return an error.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command creates an object containing the default routing configuration values and assigns that object to the variable $x.
Any other use of this cmdlet will return an error.

$x = New-CsRoutingConfiguration -Identity global -InMemory

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command creates an object containing the default routing configuration values and assigns that object to the variable $x.
Any other use of this cmdlet will return an error.

$x = New-CsRoutingConfiguration -Identity global -InMemory

## PARAMETERS

### -Identity
The scope of the routing configuration.
This value must be Global.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Route
**Below Content Applies To:** Lync Server 2010

A list of all voice routes (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route objects) defined for the Lync Server 2010 deployment.

You can create voice route objects by using the New-CsVoiceRoute cmdlet.
That is the recommended way of adding voice routes to this list.



**Below Content Applies To:** Lync Server 2013

A list of all voice routes (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route objects) defined for the Lync Server deployment.

You can create voice route objects by using the New-CsVoiceRoute cmdlet.
That is the recommended way of adding voice routes to this list.



**Below Content Applies To:** Skype for Business Server 2015

A list of all voice routes (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route objects) defined for the Skype for Business Server 2015 deployment.

You can create voice route objects by using the New-CsVoiceRoute cmdlet.
That is the recommended way of adding voice routes to this list.



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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -CallViaWorkCallerId
The number the system will display for the callback portion of an external call.
External calls first connect the user making the call by calling a specified number (typically the user's desk phone), once connected to the user, the system dials the outside number.
The CallViaWorkCallerId parameter specifies the number that will be displayed during the first leg, or callback segment, of the call via work external call.
For more information, see New-CsCallViaWorkPolicy.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLocationBasedRouting
When set to True, voice routing will be managed by taking into account the location of both the user placing the call and the user receiving the call.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
None.

## OUTPUTS

###  
Can create an in-memory object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnRoutingSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ead67e35-b145-4041-ba3e-4b26c47cce1d(OCS.14).aspx)

[Remove-CsRoutingConfiguration]()

[Set-CsRoutingConfiguration]()

[Get-CsRoutingConfiguration]()

[New-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/ead67e35-b145-4041-ba3e-4b26c47cce1d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ead67e35-b145-4041-ba3e-4b26c47cce1d(OCS.16).aspx)

