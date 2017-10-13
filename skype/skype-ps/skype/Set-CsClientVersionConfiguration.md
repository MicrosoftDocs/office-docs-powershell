---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsClientVersionConfiguration
schema: 2.0.0
---

# Set-CsClientVersionConfiguration

## SYNOPSIS
Modifies the specified collection of client version configuration settings.
Client version configuration settings determine whether or not Skype for Business Server checks the version number of each client application that logs on to the system.
If client version filtering is enabled, then the ability of that client application to access the system will be based on settings configured in the appropriate client version policy.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsClientVersionConfiguration [[-Identity] <XdsIdentity>] [-DefaultAction <DefaultAction>]
 [-Enabled <Boolean>] [-Force] [-WhatIf] [-Confirm] [-DefaultURL <String>] [<CommonParameters>]
```

### Instance
```
Set-CsClientVersionConfiguration [-Instance <PSObject>] [-DefaultAction <DefaultAction>] [-Enabled <Boolean>]
 [-Force] [-WhatIf] [-Confirm] [-DefaultURL <String>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Skype for Business Server by using Skype for Business; there are no technical limitations that would prevent users from logging on by using Microsoft Office Communicator 2007 R2.

On the other hand, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Skype for Business; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Skype for Business.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Skype for Business Server.
When you install Skype for Business Server, a global set of client version configuration settings is installed and enabled.
These settings are used to determine whether or not client version filtering is enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope; in those instances, the site settings will have precedence over the global settings.

The `Set-CsClientVersionConfiguration` cmdlet enables you to modify an existing collection of client version configuration settings.

Note that client version configuration is not a security feature.
The technology relies on self-reporting from client applications and does not attempt to verify that an application is really the application and the version number of that application that it claims to be.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsClientVersionConfiguration -Identity site:Redmond -Enabled $False
```

In Example 1, the `Set-CsClientVersionConfiguration` cmdlet is used to modify the settings collection with the Identity "site:Redmond".
In this case, the Enabled parameter is set to False in order to disable the client version configuration settings.


### -------------------------- Example 2 --------------------------
```
Get-CsClientVersionConfiguration | Set-CsClientVersionConfiguration -DefaultURL "https://litwareinc.com/csclients"
```

In Example 2, the DefaultUrl property is modified for all the client version configuration settings currently in use in the organization.
To do this, the command first calls the `Get-CsClientVersionConfiguration` cmdlet without any additional parameters in order to return all of the client version configuration settings.
That information is then piped to the `Set-CsClientVersionConfiguration` cmdlet, which sets the value of the DefaultUrl for each configuration collection to https://litwareinc.com/csclients.


### -------------------------- Example 3 --------------------------
```
Get-CsClientVersionConfiguration | Where-Object {$_.DefaultAction -eq "Block"} | Set-CsClientVersionConfiguration -DefaultAction "BlockWithUrl" -DefaultURL "https://litwareinc.com/csclients"
```

In Example 3, modifications are made to all the client version configuration settings where the DefaultAction is currently set to Block.
To carry out this task, the command first uses the `Get-CsClientVersionConfiguration` cmdlet to return all of the client version configuration settings currently in use.
That information is then piped to the `Where-Object` cmdlet, which picks out only those items where the DefaultAction property is equal to "Block".
In turn, that filtered collection is then piped to the `Set-CsClientVersionConfiguration` cmdlet, which does two things to each item in the collection: 1) sets the DefaultAction to BlockWithUrl and 2) sets the DefaultUrl to https://litwareinc.com/csclients.


## PARAMETERS

### -Identity
Represents the unique identifier of the client version configuration settings to be modified.
To modify the global settings, use syntax like this: `-Identity global`.
To modify settings assigned to the site scope, use syntax similar to this: `"site:Redmond"`.

If this parameter is not included, the `Set-CsClientVersionConfiguration` cmdlet will automatically configure the global settings.


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

### -DefaultAction
Indicates the action to be taken if a user tries to log on from a client application with a version number that cannot be found in the appropriate client version policy.
DefaultAction must be set to one of the following values:

Allow.
The client application will be allowed to log on.

AllowWithUrl.
The client application will be allowed to log on.
In addition, a message box will be displayed to the user that includes the URL of a webpage where that user can download an approved client application.
The URL for this webpage should be specified as the value for the DefaultUrl property.

Block.
The client application will be prevented from logging on.

BlockWithUrl.
The client application will be prevented from logging on.
However, the "Access denied" message box displayed to the user will include the URL of a webpage where that user can download an approved client application.
The URL for this webpage should be specified as the value for the DefaultUrl property.

This property is ignored if the Enabled property is set to False.
When the Enabled property is set to False, then no client version filtering of any kind takes place.

```yaml
Type: DefaultAction
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
Indicates whether client version filtering is enabled or disabled.
If the Enabled property is True, then the server will check the version number of each client application that attempts to log on; the server will then allow or deny access based on the appropriate client version policy.
If the Enabled property is False, then any client application capable of logging on will be allowed to log on.

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

### -DefaultURL
Specifies the URL of the webpage where users can download an approved client application.
If specified and if the DefaultAction is set to BlockWithURL, this URL will appear in the "Access denied" message box displayed any time a user tries to log on from an unsupported client application.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.
The `Set-CsClientVersionConfiguration` cmdlet accepts pipelined instances of the client version configuration object.

## OUTPUTS

###  
The `Set-CsClientVersionConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsClientVersionConfiguration](Get-CsClientVersionConfiguration.md)

[New-CsClientVersionConfiguration](New-CsClientVersionConfiguration.md)

[Remove-CsClientVersionConfiguration](Remove-CsClientVersionConfiguration.md)
