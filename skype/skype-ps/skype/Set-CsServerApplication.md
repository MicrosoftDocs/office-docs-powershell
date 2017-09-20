---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsServerApplication
schema: 2.0.0
---

# Set-CsServerApplication

## SYNOPSIS
Modifies the property values of an existing server application.
Server applications are applications that are hosted by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsServerApplication [[-Identity] <XdsIdentity>] [-Critical <Boolean>] [-Enabled <Boolean>]
 [-Priority <Int32>] [-ScriptName <String>] [-Uri <String>] [-Force] [-Confirm] [-WhatIf] [-Script <String>]
 [<CommonParameters>]
```

### Instance
```
Set-CsServerApplication [-Instance <PSObject>] [-Critical <Boolean>] [-Enabled <Boolean>] [-Priority <Int32>]
 [-ScriptName <String>] [-Uri <String>] [-Force] [-Confirm] [-WhatIf] [-Script <String>] [<CommonParameters>]
```

## DESCRIPTION
Server applications refer to the individual programs that run under the Skype for Business Server.
The `Set-CsServerApplication` cmdlet provides a way for administrators to modify the property values of any application running as part of Skype for Business Server.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsServerApplication -Identity "Registrar:atl-cs-001.litwareinc.com/ExumRouting" -Enabled $True
```

The command shown in Example 1 enables the server application that has the Identity Registrar:atl-cs-001.litwareinc.com/ExumRouting.
Because Identities must be unique, this command will only enable a single server application.


### -------------------------- Example 2 ------------------------
```
Get-CsServerApplication | Where-Object {$_.Enabled -eq $False} | Set-CsServerApplication -Enabled $True
```

Example 2 enables all the server applications that are currently disabled.
To do this, the command first calls the `Get-CsServerApplication` cmdlet in order to return a collection of all the server applications currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those applications where the Enabled property is equal to False.
In turn, the filtered collection is piped to the `Set-CsServerApplication` cmdlet, which takes each item in the collection and sets the Enabled property to True.


## PARAMETERS

### -Identity
Unique identifier for the server application to be modified.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: Registrar:atl-cs-001.litwareinc.com/QoEAgent.

```yaml
Type: XdsIdentity
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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### -Critical
If set to True (the default value), then Skype for Business Server will not start unless the application in question can be started.
If False, then Skype for Business Server will start regardless of whether or not the application can be started.


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

### -Enabled
Set this value to True to enable the application.
Set the value to False to disable the application.

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

### -Priority
Indicates the order of execution for server applications.
The application with priority 0 is started first; the application with priority 1 is started second and so on.
Note that each service that hosts a server application has its own unique set of priorities.
For example, the Registrar service might host three applications with corresponding priorities 0, 1 and 2.
Similarly, the Edge Server service might have four applications; these applications will have the priorities 0, 1, 2 and 3.

If you do not specify a priority then the application will automatically be added to the bottom of the priority list.
If you add or remove an application, the priorities of the other applications will be adjusted accordingly.
For example, if you delete an application that has a priority of 0, then the application that previously had the priority 1 will automatically have its priority set to 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScriptName
Path to the Microsoft SIP Processing Language (MSPL) script used by the application.
MSPL is a scripting language used for filtering and routing SIP messages.

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

### -Uri
Unique Uniform Resource Identifier (URI) for the application.
For example, the QoEAgent application has the URI http://www.microsoft.com/LCS/QoEAgent.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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
Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.
The `Set-CsServerApplication` cmdlet accepts pipelined instances of the server application object.

## OUTPUTS

###  
The `Set-CsServerApplication` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.application object.

## NOTES

## RELATED LINKS

[Get-CsServerApplication]()

[New-CsServerApplication]()

[Remove-CsServerApplication]()
