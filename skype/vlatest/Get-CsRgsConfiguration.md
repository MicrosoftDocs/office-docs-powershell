---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsRgsConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about configuration settings for the Response Group application.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about configuration settings for the Response Group application.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsRgsConfiguration [-Identity] <RgsIdentity> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be directly routed to the appropriate set of Response Group agents.
Alternatively, the call might first be routed to an interactive voice response (IVR) queue.
In that queue, the caller will be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be routed to the appropriate Response Group queue.

The Get-CsRgsConfiguration cmdlet provides a way for you to return information about how the Response Group application has been configured.
Note that, by default, this cmdlet only returns information from one instance of the Response Group application at a time.
For example, if you have separate installations of the Response Group application -- one on ApplicationServer:atl-cs-001.litwareinc.com and one on ApplicationServer:dublin-cs-001.litwareinc.com -- you will typically need to make separate calls to Get-CsRgsConfiguration in order to return information for each of these Response Group instances.
However, the Examples section in this topic shows a way to work around this issue.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRgsConfiguration cmdlet locally: RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsRgsConfiguration"}

**Below Content Applies To:** Lync Server 2013

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be directly routed to the appropriate set of Response Group agents.
Alternatively, the call might first be routed to an interactive voice response (IVR) queue.
In that queue, the caller will be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be routed to the appropriate Response Group queue.

The Get-CsRgsConfiguration cmdlet provides a way for you to return information about how the Response Group application has been configured.
Note that, by default, this cmdlet only returns information from one instance of the Response Group application at a time.
For example, if you have separate installations of the Response Group application -- one on ApplicationServer:atl-cs-001.litwareinc.com and one on ApplicationServer:dublin-cs-001.litwareinc.com -- you will typically need to make separate calls to Get-CsRgsConfiguration in order to return information for each of these Response Group instances.
However, the Examples section in this topic shows a way to work around this issue.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRgsConfiguration cmdlet locally: RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsRgsConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be directly routed to the appropriate set of Response Group agents.
Alternatively, the call might first be routed to an interactive voice response (IVR) queue.
In that queue, the caller will be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be routed to the appropriate Response Group queue.

The Get-CsRgsConfiguration cmdlet provides a way for you to return information about how the Response Group application has been configured.
Note that, by default, this cmdlet only returns information from one instance of the Response Group application at a time.
For example, if you have separate installations of the Response Group application -- one on ApplicationServer:atl-cs-001.litwareinc.com and one on ApplicationServer:dublin-cs-001.litwareinc.com -- you will typically need to make separate calls to Get-CsRgsConfiguration in order to return information for each of these Response Group instances.
However, the Examples section in this topic shows a way to work around this issue.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"
```

Example 1 returns the Response Group configuration settings for the service ApplicationServer:atl-cs-001.litwareinc.com.
Because there can only be one collection of settings per service, this command will never return more than a single item.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns the Response Group configuration settings for the service ApplicationServer:atl-cs-001.litwareinc.com.
Because there can only be one collection of settings per service, this command will never return more than a single item.

Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns the Response Group configuration settings for the service ApplicationServer:atl-cs-001.litwareinc.com.
Because there can only be one collection of settings per service, this command will never return more than a single item.

Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").DisableCallContext
```

The preceding command returns the value of a single property -- DisableCallContext -- for the Response Group configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To accomplish this task, Get-CsRgsConfiguration is first used to retrieve all the property values for the Response Group configuration settings for ApplicationServer:atl-cs-001.litwareinc.com.
Note that this command is enclosed in parentheses; that ensures that Windows PowerShell returns all the property values before doing anything else.

After all the property values have been returned, standard "dot notation" is used to display the value of the property DisableCallContext (and only the value of that property).
Standard dot notation consists of the object followed by a period (dot) followed by the name of the property to be displayed.
For example, to display the value of the AgentRingbackGracePeriod property (and only the value of that property), you can use this command:

(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").AgentRingbackGracePeriod.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns the value of a single property -- DisableCallContext -- for the Response Group configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To accomplish this task, Get-CsRgsConfiguration is first used to retrieve all the property values for the Response Group configuration settings for ApplicationServer:atl-cs-001.litwareinc.com.
Note that this command is enclosed in parentheses; that ensures that Windows PowerShell returns all the property values before doing anything else.

After all the property values have been returned, standard "dot notation" is used to display the value of the property DisableCallContext (and only the value of that property).
Standard dot notation consists of the object followed by a period (dot) followed by the name of the property to be displayed.
For example, to display the value of the AgentRingbackGracePeriod property (and only the value of that property), you can use this command:

(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").AgentRingbackGracePeriod.

(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").DisableCallContext

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns the value of a single property -- DisableCallContext -- for the Response Group configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To accomplish this task, Get-CsRgsConfiguration is first used to retrieve all the property values for the Response Group configuration settings for ApplicationServer:atl-cs-001.litwareinc.com.
Note that this command is enclosed in parentheses; that ensures that Windows PowerShell returns all the property values before doing anything else.

After all the property values have been returned, standard "dot notation" is used to display the value of the property DisableCallContext (and only the value of that property).
Standard dot notation consists of the object followed by a period (dot) followed by the name of the property to be displayed.
For example, to display the value of the AgentRingbackGracePeriod property (and only the value of that property), you can use this command:

(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").AgentRingbackGracePeriod.

(Get-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com").DisableCallContext

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Get-CsRgsConfiguration -Identity $_.Identity}
```

The command shown in Example 3 demonstrates how you can return Response Group configuration information from all the computers running the Application service that host an instance of the Response Group application.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the servers in the organization that are running the Application service.
This collection is then piped to the Where-Object cmdlet, which picks out only those servers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those servers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each server in the collection and uses Get-CsRgsConfiguration to return Response Group configuration information from each server.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 demonstrates how you can return Response Group configuration information from all the computers running the Application service that host an instance of the Response Group application.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the servers in the organization that are running the Application service.
This collection is then piped to the Where-Object cmdlet, which picks out only those servers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those servers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each server in the collection and uses Get-CsRgsConfiguration to return Response Group configuration information from each server.

Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Get-CsRgsConfiguration -Identity $_.Identity}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 demonstrates how you can return Response Group configuration information from all the computers running the Application service that host an instance of the Response Group application.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the servers in the organization that are running the Application service.
This collection is then piped to the Where-Object cmdlet, which picks out only those servers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those servers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each server in the collection and uses Get-CsRgsConfiguration to return Response Group configuration information from each server.

Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Get-CsRgsConfiguration -Identity $_.Identity}

## PARAMETERS

### -Identity
Name of the service hosting the Response Group configuration settings; for example: -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com".
If you do not include this parameter, Get-CsRgsConfiguration will prompt you to supply an Identity.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String.
Get-CsRgsConfiguration accepts a string value representing the Identity of the Response Group configuration settings.

## OUTPUTS

###  
Get-CsRgsConfiguration returns instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.ServiceSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a3667917-cfbf-47c1-8b48-e936594b5357(OCS.14).aspx)

[Move-CsRgsConfiguration]()

[Set-CsRgsConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/a3667917-cfbf-47c1-8b48-e936594b5357(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a3667917-cfbf-47c1-8b48-e936594b5357(OCS.16).aspx)

