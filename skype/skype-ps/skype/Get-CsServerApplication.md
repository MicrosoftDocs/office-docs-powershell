---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsServerApplication
schema: 2.0.0
---

# Get-CsServerApplication

## SYNOPSIS
Returns information about the server applications in use in your organization.
Server applications are applications that are hosted by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsServerApplication [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsServerApplication [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Server applications refer to the individual programs that run under Skype for Business Server.
The Get-CsServerApplication cmdlet provides a way for administrators to return information about any (or all) of the applications running as part of Skype for Business Server.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsServerApplication
```

The command shown in Example 1 returns information about all the server applications currently in use in the organization.
This is done by calling the Get-CsServerApplication cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com"
```

In Example 2, information is returned for all the server applications running on the service EdgeServer:atl-edge-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsServerApplication -Identity "service:Registrar:atl-cs-001.litwareinc.com/ExumRouting"
```

Example 3 returns information for a single server application: the application that has the Identity Registrar:atl-cs-001.litwareinc.com/ExumRouting".

### -------------------------- Example 4 --------------------------
```
Get-CsServerApplication -Filter "service:*:atl-cs-001.litwareinc.com*"
```

Example 4 returns all the server applications configured for use in the pool atl-cs-001.litwareinc.com.
This is done by using the Filter parameter and the filter value "service:*:atl-cs-001.litwareinc.com*".
The filter value limits the returned data to applications that have an Identity that begins with the characters "service:" and includes the characters ":atl-cs-001.litwareinc.com".

### -------------------------- Example 5 --------------------------
```
Get-CsServerApplication | Where-Object {$_.Enabled -eq $False}
```

In Example 5, information is returned for all the server applications that are currently disabled.
To carry out this task, the command first calls the Get-CsServerApplication cmdlet to return a collection of all the server applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

### -------------------------- Example 6 --------------------------
```
Get-CsServerApplication | Where-Object {$_.Critical -eq $True -and $_.Enabled -eq $False}
```

Example 6 is a variation of the command shown in Example 5.
In Example 6, information is returned for all the server applications that are marked as critical and are currently disabled.
To do this, the command first calls the Get-CsServerApplication cmdlet without any parameters; that returns a collection of all the server applications configured for use.
This collection is then piped to the Where-Object cmdlet, which picks out only those applications that meet two criteria: the Critical property must be equal to True; and, the Enabled property must be equal to False.
The -and operator ensures that only objects that meet both criteria will be returned.

### -------------------------- Example 7 --------------------------
```
Get-CsServerApplication | Where-Object {$_.Uri -like "*routing*"}
```

In Example 7, information is returned for any server application that has the string value "routing" somewhere in its Uri.
This task is accomplished by first using the Get-CsServerApplication cmdlet to retrieve all the server applications currently in use.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those applications in which the Uri property includes the string value "routing".

### -------------------------- Example 8 --------------------------
```
Get-CsServerApplication | Where-Object {$_.ScriptName -ne $Null}
```

Example 8 returns information for all the server applications that have been assigned a script.
To do this, the command first retrieves a collection of all the server applications currently in use; this information is retrieved by calling the Get-CsServerApplication cmdlet without any parameters.
The complete collection of server applications is then piped to the Where-Object cmdlet, which selects only those applications where the ScriptName property is not equal to a null value.
If the ScriptName property is not equal to a null value that means that a script has been assigned to that application.


## PARAMETERS

### -Identity
Unique identifier for the server application to be retrieved.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: service: Registrar:atl-cs-001.litwareinc.com/QoEAgent.

To retrieve a collection of all the applications running on a given service, simply leave off the application name:

`-Identity "Registrar:atl-cs-001.litwareinc.com "`

If this parameter is omitted, then all the server applications will be returned when you call the Get-CsServerApplication cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when returning a server application or set of server applications.
For example, to return all the server applications that have the string value "IIMFilter" somewhere in their Identity use this syntax:

`-Filter "*IIMFilter*"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the server application data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application


## NOTES


## RELATED LINKS

[New-CsServerApplication](New-CsServerApplication.md)

[Remove-CsServerApplication](Remove-CsServerApplication.md)

[Set-CsServerApplication](Set-CsServerApplication.md)

