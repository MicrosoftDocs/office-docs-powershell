---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsUserServer
schema: 2.0.0
---

# Set-CsUserServer

## SYNOPSIS
Enables you to modify an existing User Services pool.
Among other things, the User Services pool provides presence information and helps to manage conferences.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsUserServer [[-Identity] <XdsGlobalRelativeIdentity>] [-ConferenceServer <String>]
 [-McuFactorySipPort <UInt16>] [-UserDatabase <String>] [-Force] [-WhatIf] [-Confirm]
 [-ConfDirManagementWcfTcpPort <UInt16>] [-UserPinManagementWcfHttpPort <UInt16>] [<CommonParameters>]
```

## DESCRIPTION
User Services is a catch-all component that performs a number of key Skype for Business Server roles; for example, User Services provides presence information; helps to manage conferences (through the Focus and Focus Factory); handles user authorization and user-level routing and serves as the primary interface to the back-end database.
User Services also assists with provisioning user accounts.

Because of this, it is important for administrators to know exactly how their User Services pools have been configured and, if necessary, to modify those configurations.
You can retrieve information about your User Services pools by using this command:

`Get-CsService -UserServer`

Likewise, you can use the `Set-CsUserServer` cmdlet to make changes to any of these pools.
The `Set-CsUserServer` cmdlet enables administrators to change the user database and/or the conferencing server associated with a pool.
The cmdlet also lets you modify the port used for connections to the Focus Factory.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsUserServer -Identity "UserServer:atl-cs-001.litwareinc.com" -McuFactorySipPort 445
```

The command shown in Example 1 changes the McuFactorySipPort for a single User Services pool: the pool with the Identity `UserServer:atl-cs-001.litwareinc.com`.
In this example, the port is changed to 445.


### -------------------------- Example 2 ------------------------
```
Get-CsService -UserServer | ForEach-Object {Set-CsUserServer -Identity $_.Identity -McuFactorySipPort 445}
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the McuFactorySipPort is modified for all the User Services pools in the organization.
To do this, the command starts off by using the `Get-CsService` cmdlet and the UserServer parameter to return a collection of all the User Services pool currently in use.
This collection is then piped to the `ForEach-Object` cmdlet, which takes each pool in the collection and sets the McuFactorySipPort to 445.
The data must be piped to the `ForEach-Object` cmdlet because the `Set-CsUserServer` cmdlet cannot accept pipelined data itself.


## PARAMETERS

### -Identity
Unique identifier for the User Services pool to be modified.
For example:

`-Identity "UserServer:atl-cs-001.litwareinc.com"`

Note that you can leave off the prefix "UserServer:" when specifying a User server.
For example:

`-Identity "atl-cs-001.litwareinc.com"`


```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferenceServer
Service ID for the conferencing server associated with the User Services pool.
For example:

`-ConferenceServer "ConferenceServer:atl-cs-001.litwareinc.com"`


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

### -McuFactorySipPort
Port used for connecting to the Focus Factory (McuFactory).
The Focus Factory allocates media control units (MCUs) in order to add specific media types such as audio to conferences.


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDatabase
Service ID for the user database associated with the User Services pool.
For example:

`-UserDatabase "UserDatabase:atl-cs-001.litwareinc.com"`


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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -ConfDirManagementWcfTcpPort
Windows Communication Foundation (WCF) port used for managing conference directories.
The default value is 9001.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPinManagementWcfHttpPort
Port used by Windows Communication Foundation (WCF) when managed user PINs.
The default value is 443.

```yaml
Type: UInt16
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Set-CsUserServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsUserServer` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayUserServer object.

## NOTES

## RELATED LINKS

[Get-CsService](Get-CsService.md)

