---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsServerApplication
schema: 2.0.0
---

# New-CsServerApplication

## SYNOPSIS

Creates a new server application.
Server applications are applications that are hosted by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsServerApplication [-Identity] <XdsIdentity> -Uri <String> [-Enabled <Boolean>] [-Critical <Boolean>]
 [-ScriptName <String>] [-Priority <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [-Script <String>]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsServerApplication -Parent <String> -Name <String> -Uri <String> [-Enabled <Boolean>]
 [-Critical <Boolean>] [-ScriptName <String>] [-Priority <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [-Script <String>] [<CommonParameters>]
```

## DESCRIPTION

Server applications refer to the individual programs that run under Skype for Business Server.
The New-CsServerApplication cmdlet provides a way for administrators to configure new server applications.



## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```

New-CsServerApplication -Identity "EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor" -Uri http://www.litwareinc.com/edgemonitor -Critical $False
```

Example 1 creates a new server application with the Identity EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor.
In addition to specifying the Identity, the parameters Uri and Critical are included; these parameters are used to specify the application URI and to indicate the application is not considered critical.

### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsServerApplication -Identity "EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor" -InMemory

$x.Uri = "http://www.litwareinc.com/edgemonitor"

$x.Critical = $False

Set-CsServerApplication -Instance $x
```

The commands shown in Example 2 demonstrate how you can create a new server application that initially exists only in memory.
To do this, the first command calls the New-CsServerApplication cmdlet along with two parameters: Identity (which specifies the Identity for the application) and InMemory, which indicates that the new application should be created in memory only.
The resulting server application object is then stored in the variable $x.

After this virtual server application has been created, commands 2 and 3 are used to modify the values of the Uri and Critical properties, respectively.
Finally, command 4 is used to transform the virtual server application into an actual server application.
Note that this final command is mandatory.
If you do not call the Set-CsServerApplication cmdlet, no application will be configured for EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor, and the virtual application will disappear as soon as you end your Windows PowerShell session or delete the variable $x.


## PARAMETERS

### -Identity
Unique identifier for the server application to be created.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: service:Registrar:atl-cs-001.litwareinc.com/QoEAgent.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent

Specifies the service that will host the new server application.
If you use the Identity parameter, then you do not need to use either the Parent or the Name parameters; that's because the application Identity combines the values of the Parent and Name properties.
However, you can omit the Identity parameter by using the Parent and Name parameters instead.
In that case, the Parent parameter would need to look something like this:

`-Parent "Registrar:atl-cs-001.litwareinc.com"`



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Friendly name for the service.
If you use the Identity parameter you do not need to include the Name parameter when creating a new service; instead, the Name property will be populated using the name portion of the application Identity.
For example, if you create a new application with the Identity service:Registrar:atl-cs-001.litwareinc.com/TestService the application will automatically be named TestService.
The Name parameter is required only if you use the Parent parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
Unique Uniform Resource Identifier (URI) for the application.
For example, the QoEAgent application has the URI http://www.microsoft.com/LCS/QoEAgent.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Set this value to True to enable the application.
Set the value to False to disable the application.
If this parameter is not specified the Enabled property will be set to False and the new application will be disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Critical

If set to True, then Skype for Business Server will not start unless the application in question can be started.
If False, then Skype for Business Server will start regardless of whether or not the application can be started.
If this parameter is not specified the Critical property will be set to True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScriptName
Path to the Microsoft SIP Processing Language (MSPL) script used by the application (if applicable).
MSPL is a scripting language used for filtering and routing SIP messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Indicates the order of execution for server applications.
The application with priority 0 is started first; the application with priority 1 is started second; and so on.
Note that each service that hosts a server application has its own unique set of priorities.
For example, the Registrar service might host three applications with corresponding priorities 0, 1, and 2.
Similarly, the Edge Server service might have four applications; these applications will have the priorities 0, 1, 2, and 3.

If you do not specify a priority then the application will automatically be added to the bottom of the priority list.
If you add or remove an application the priorities of the other applications will be adjusted accordingly.
For example, if you delete an application that has a priority of 0 then the application that previously had the priority 1 will automatically have its priority set to 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Script
Enables you to associate the server application with a script.
To add a script to a server application, use syntax similar to this:

`-Script "Update.ps1"`

To remove a script, simply set the Script property to a null value:

`-Script $Null`

Each server application can only be associated with one script.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsServerApplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsServerApplication cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.

## NOTES

## RELATED LINKS

[Get-CsServerApplication](Get-CsServerApplication.md)

[Remove-CsServerApplication](Remove-CsServerApplication.md)

[Set-CsServerApplication](Set-CsServerApplication.md)


