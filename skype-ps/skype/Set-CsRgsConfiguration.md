---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsRgsConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies configuration settings for the Response Group application.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies configuration settings for the Response Group application.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Direct
```
Set-CsRgsConfiguration [-Identity] <RgsIdentity> [-AgentRingbackGracePeriod <Int16>]
 [-DefaultMusicOnHoldFile <AudioFile>] [-DisableCallContext <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsRgsConfiguration [-Instance] <ServiceSettings> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be automatically routed to the appropriate set of Response Group agents.
Alternatively, the call might be routed to an interactive voice response (IVR) queue.
In that queue, the caller would be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be given the asked-for information or be routed to a Response Group agent.

The Set-CsRgsConfiguration cmdlet provides a way for you to modify the properties of a Response Group application instance.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRgsConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Set-CsRgsConfiguration"}

**Below Content Applies To:** Lync Server 2013

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be automatically routed to the appropriate set of Response Group agents.
Alternatively, the call might be routed to an interactive voice response (IVR) queue.
In that queue, the caller would be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be given the asked-for information or be routed to a Response Group agent.

The Set-CsRgsConfiguration cmdlet provides a way for you to modify the properties of a Response Group application instance.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRgsConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsRgsConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be automatically routed to the appropriate set of Response Group agents.
Alternatively, the call might be routed to an interactive voice response (IVR) queue.
In that queue, the caller would be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be given the asked-for information or be routed to a Response Group agent.

The Set-CsRgsConfiguration cmdlet provides a way for you to modify the properties of a Response Group application instance.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -AgentRingbackGracePeriod 30
```

The command shown in Example 1 modifies the AgentRingbackGracePeriod property for the Response Group application configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
In this example, AgentRingbackGracePeriod is set to 30 seconds.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the AgentRingbackGracePeriod property for the Response Group application configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
In this example, AgentRingbackGracePeriod is set to 30 seconds.

Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -AgentRingbackGracePeriod 30

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the AgentRingbackGracePeriod property for the Response Group application configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com.
In this example, AgentRingbackGracePeriod is set to 30 seconds.

Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -AgentRingbackGracePeriod 30

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Set-CsRgsConfiguration -Identity $_.Identity -AgentRingbackGracePeriod 30}
```

Example 2 modifies the AgentRingbackGracePeriod for all the Response Group configuration settings in the organization.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the computers in the organization that are running the Application service.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those computers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those computers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each computer in the collection and uses the Set-CsRgsConfiguration to set the value of the AgentRingbackGracePeriod of the computer's Response Group configuration settings r to 30 seconds.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 modifies the AgentRingbackGracePeriod for all the Response Group configuration settings in the organization.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the computers in the organization that are running the Application service.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those computers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those computers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each computer in the collection and uses the Set-CsRgsConfiguration to set the value of the AgentRingbackGracePeriod of the computer's Response Group configuration settings r to 30 seconds.

Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Set-CsRgsConfiguration -Identity $_.Identity -AgentRingbackGracePeriod 30}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 modifies the AgentRingbackGracePeriod for all the Response Group configuration settings in the organization.
To do this, the command first uses the Get-CsService cmdlet and the ApplicationServer parameter to return information about all the computers in the organization that are running the Application service.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those computers where the Applications property contains the application "urn:application:RGS"; that value indicates that the Response Group application is running on the server.

In turn, those computers are piped to the ForEach-Object cmdlet.
ForEach-Object then takes each computer in the collection and uses the Set-CsRgsConfiguration to set the value of the AgentRingbackGracePeriod of the computer's Response Group configuration settings r to 30 seconds.

Get-CsService -ApplicationServer | Where-Object {$_.Applications -contains "urn:application:RGS"} | ForEach-Object {Set-CsRgsConfiguration -Identity $_.Identity -AgentRingbackGracePeriod 30}

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
$x = Import-CsRgsAudioFile -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -FileName "WhileYouWait.wav" -Content (Get-Content C:\Media\WhileYouWait.wav -Encoding byte -ReadCount 0)

Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -DefaultMusicOnHoldFile $x
```

The commands shown in Example 3 import an audio file (C:\Media\WhileYouWait.wav) and then assign that file to the DefaultMusicOnHoldFile property.
To perform this task, the first command uses Import-CsRgsAudioFile to import the audio file to the Response Group application found on ApplicationServer:atl-cs-001.litwareinc.com.
In addition to the Identity parameter (which specifies the service location), the FileName parameter is used to specify the file name of the file being imported.

Equally important, the Content parameter is used to import the audio file.
File importing is carried out by calling the Get-Content cmdlet followed by the path to the file being imported.
Get-Content also requires you to set the encoding type to byte and the ReadCount to 0.
(Setting the ReadCount to 0 ensures that the entire file is read in in a single operation.) The imported file is then stored in a variable named $x.

After the file has been imported, Set-CsRgsConfiguration is called in order to set the DefaultMusicOnHold property to the audio file stored in $x.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 3 import an audio file (C:\Media\WhileYouWait.wav) and then assign that file to the DefaultMusicOnHoldFile property.
To perform this task, the first command uses Import-CsRgsAudioFile to import the audio file to the Response Group application found on ApplicationServer:atl-cs-001.litwareinc.com.
In addition to the Identity parameter (which specifies the service location), the FileName parameter is used to specify the file name of the file being imported.

Equally important, the Content parameter is used to import the audio file.
File importing is carried out by calling the Get-Content cmdlet followed by the path to the file being imported.
Get-Content also requires you to set the encoding type to byte and the ReadCount to 0.
(Setting the ReadCount to 0 ensures that the entire file is read in in a single operation.) The imported file is then stored in a variable named $x.

After the file has been imported, Set-CsRgsConfiguration is called in order to set the DefaultMusicOnHoldFile property to the audio file stored in $x.

$x = Import-CsRgsAudioFile -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -FileName "WhileYouWait.wav" -Content (Get-Content C:\Media\WhileYouWait.wav -Encoding byte -ReadCount 0)

Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -DefaultMusicOnHoldFile $x

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 3 import an audio file (C:\Media\WhileYouWait.wav) and then assign that file to the DefaultMusicOnHoldFile property.
To perform this task, the first command uses Import-CsRgsAudioFile to import the audio file to the Response Group application found on ApplicationServer:atl-cs-001.litwareinc.com.
In addition to the Identity parameter (which specifies the service location), the FileName parameter is used to specify the file name of the file being imported.

Equally important, the Content parameter is used to import the audio file.
File importing is carried out by calling the Get-Content cmdlet followed by the path to the file being imported.
Get-Content also requires you to set the encoding type to byte and the ReadCount to 0.
(Setting the ReadCount to 0 ensures that the entire file is read in in a single operation.) The imported file is then stored in a variable named $x.

After the file has been imported, Set-CsRgsConfiguration is called in order to set the DefaultMusicOnHoldFile property to the audio file stored in $x.

$x = Import-CsRgsAudioFile -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -FileName "WhileYouWait.wav" -Content (Get-Content C:\Media\WhileYouWait.wav -Encoding byte -ReadCount 0)

Set-CsRgsConfiguration -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -DefaultMusicOnHoldFile $x

## PARAMETERS

### -Identity
Name of the service hosting the Response Group configuration settings.
For example: -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com."

```yaml
Type: RgsIdentity
Parameter Sets: Direct
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Instance
Object reference to the Response Group configuration settings to be modified.
An object reference is typically retrieved by using the Get-CsRgsConfiguration cmdlet and assigning the returned value to a variable; for example, this command returns an object reference to the configuration settings found on the service ApplicationServer:atl-cs-001.litwareinc.com and stores that object reference in a variable named $x:

$x = Get-CsRgsConfiguration -Identity service:ApplicationServer:atl-cs-001.litwareinc.com

```yaml
Type: ServiceSettings
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AgentRingbackGracePeriod
If an agent declines a call, the AgentRingbackGracePeriod represents the amount of time (in seconds) that can elapse before the call returns to the same agent.
The grace period can be set to any integer value between 30 and 600 seconds (10 minutes), inclusive.
The default value is 60 seconds.

```yaml
Type: Int16
Parameter Sets: Direct
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMusicOnHoldFile
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Represents the music that, by default, will be played any time a caller is placed on hold.
The default music will play only if a Response Group workflow has not defined its own music on hold.

The DefaultMusicOnHoldFile property must be configured using an object reference created by using the Import-CsRgsAudioFile cmdlet.

If DefaultMusicOnHold is equal to a null value (the default value) and if a workflow has not defined custom music on hold, then the default music on hold that is automatically configured when you install Lync Server will be played any time a caller is placed on hold.



**Below Content Applies To:** Skype for Business Server 2015

Represents the music that, by default, will be played any time a caller is placed on hold.
The default music will play only if a Response Group workflow has not defined its own music on hold.

The DefaultMusicOnHoldFile property must be configured using an object reference created by using the Import-CsRgsAudioFile cmdlet.

If DefaultMusicOnHold is equal to a null value (the default value) and if a workflow has not defined custom music on hold, then the default music on hold that is automatically configured when you install Skype for Business Server 2015 will be played any time a caller is placed on hold.



```yaml
Type: AudioFile
Parameter Sets: Direct
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableCallContext
**Below Content Applies To:** Lync Server 2010

If set to False (the default value), each agent is able to see the call context (information such as caller wait time as well as workflow questions and answers) whenever a call received.
(This information is visible from within Microsoft Lync 2010.) If set to True, call context information is not relayed to agents when a call is received.

Note that the call context is only used with IVR queues.



**Below Content Applies To:** Lync Server 2013

If set to False (the default value), each agent is able to see the call context (information such as caller wait time or workflow questions and answers) whenever a call received.
(This information is visible from within Lync.) If set to True, call context information is not relayed to agents when a call is received.

Note that the call context is only used with IVR queues.



**Below Content Applies To:** Skype for Business Server 2015

If set to False (the default value), each agent is able to see the call context (information such as caller wait time or workflow questions and answers) whenever a call received.
(This information is visible from within Skype for Business.) If set to True, call context information is not relayed to agents when a call is received.

Note that the call context is only used with IVR queues.



```yaml
Type: Boolean
Parameter Sets: Direct
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Rgs.Management.WritableSettings.ServiceSettings object.
Set-CsRgsConfiguration accepts pipelined instances of the Response Group application settings object.

## OUTPUTS

###  
Set-CsRgsConfiguration does not return any objects or values.
Instead, the cmdlet configures existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.ServiceSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/259cec4c-0152-4c8f-8aa6-51cefc1b55c9(OCS.14).aspx)

[Get-CsRgsConfiguration]()

[Move-CsRgsConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/259cec4c-0152-4c8f-8aa6-51cefc1b55c9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/259cec4c-0152-4c8f-8aa6-51cefc1b55c9(OCS.16).aspx)

