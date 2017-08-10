---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsClsRegion

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new centralized logging configuration region.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with Lync Online Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new centralized logging configuration region.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Centralized logging regions are intended for use with Skype for Business Online.



## SYNTAX

### Identity
```
New-CsClsRegion [-Identity] <XdsIdentity> -OtherRegionAccess <String> -SecurityGroupSuffix <String> [-Confirm]
 [-Force] [-InMemory] [-Sites <String>] [-WhatIf] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsClsRegion -Name <String> -OtherRegionAccess <String> -Parent <String> -SecurityGroupSuffix <String>
 [-Confirm] [-Force] [-InMemory] [-Sites <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

With the Office 365 version of Lync Server, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClsRegion"}

Lync Server Control Panel: The functions carried out by the New-CsClsRegion cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, regions are used to determine which users have access to the personally-identifiable information that is written to the log files.
Regions are created by using the New-CsClsRegion cmdlet and then are added to a collection of centralized logging configuration settings.

Skype for Business Server Control Panel: The functions carried out by the New-CsClsRegion cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example a creates a new global region named Europe.
The new region uses the security group suffix EMEA and also allows access by the global/US region.

New-CsClsRegion -Identity "global/Europe" -SecurityGroupSuffix "EMEA" -OtherRegionAccess "global/US"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example a creates a new global region named Europe.
The new region uses the security group suffix EMEA and also allows access by the global/US region.

New-CsClsRegion -Identity "global/Europe" -SecurityGroupSuffix "EMEA" -OtherRegionAccess "global/US"

## PARAMETERS

### -Identity
Unique identifier for the new region.
Region Identities consist of the centralized logging configuration scope where the region will be created plus a unique region name.
For example, to create a global region named Redmond use this syntax:

-Identity "global/Redmond"

If you use the Identity parameter then you cannot use either the name parameter or the Parent parameter in that same command.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique name for the new region.
For example:

-Name "Redmond"

If you use the Name parameter you must also use the Parent parameter.
However, you should not use the Identity parameter in the same command as the Name and Parent parameters.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherRegionAccess
Name of an additional region that can be accessed by authorized users for this region.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Scope of the centralized logging configuration settings where the new region will be located.
For example, to add the new region to the global settings, use this syntax:

-Parent "global"

You can return identities for all your centralizing logging "parents" by using this command:

Get-CsCentralizedLoggingConfiguration | Select-Object Identity

If you use the Name parameter you must also use the Parent parameter.
However, you should not use the Identity parameter in the same command as the Name and Parent parameters.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sites
**Below Content Applies To:** Lync Server 2013

Sites contained within this region.
These correspond to the SideId attribute values in the topology document.



**Below Content Applies To:** Skype for Business Server 2015

Sites contained within this region.
These correspond to the SiteId attribute values in the topology document.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
New-CsClsRegion does not accept pipelined input.

###  
None.
The New-CsClsRegion cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClsRegion creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

###  
The New-CsClsRegion cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Region#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsRegion]()

[Remove-CsClsRegion]()

[Set-CsClsRegion]()

[Online Version](http://technet.microsoft.com/EN-US/library/09396d6e-e7ec-43b8-9f5b-d9cac30348f6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/09396d6e-e7ec-43b8-9f5b-d9cac30348f6(OCS.16).aspx)

