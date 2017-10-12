---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Move-CsRgsConfiguration
schema: 2.0.0
---

# Move-CsRgsConfiguration

## SYNOPSIS

Enables you to migrate Response Group configuration settings from Microsoft Office Communications Server 2007 R2 or Microsoft Lync Server 2010 to Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Move-CsRgsConfiguration [-Source] <String> [-Destination] <String> [-Force] [-ResolveNameConflicts]
 [<CommonParameters>]
```

## DESCRIPTION

The Response Group application provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
When someone calls a designated phone number, that call can be automatically routed to the appropriate set of Response Group agents.
Alternatively, the call might be routed to an interactive voice response (IVR) queue.
In that queue, the caller would be asked a series of questions (for example, "Are you calling about an existing order?") and then, based on the answers to those questions, be given the asked-for information or be routed to a Response Group agent.

If you are currently running the Response Group application on Office Communications Server 2007 R2 or on Lync Server 2010, the Move-CsRgsConfiguration cmdlet provides a way for you to migrate this service to Skype for Business Server.
To migrate the service, you need to call the Move-CsRgsConfiguration cmdlet and specify: 1) the fully qualified domain name (FQDN) for the existing version of the Response Group application (the Source); and, 2) the FQDN for the new Skype for Business Server version of the service (the Destination).
Move-CsRgsConfiguration will then move all the configuration settings, audio files, and contact objects from the existing version (either Office Communications Server 2007 R2 or Lync Server 2010) to Skype for Business Server.
After the service has been migrated, all calls to a Response Group phone number will be handled by Skype for Business Server.
Calls will no longer be handled by the previous version of the service.

Before you can run Move-CsRgsConfiguration, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
The file OCSWMIBC.msi can be found on the installation DVD in the Setup folder.

If Office Communications Server 2007 is running Microsoft SQL Server 2005 then, before you attempt to migrate the Response Group application, you must install the Microsoft SQL Server 2005 Native Client on the computer where you will be running the Move-CsRgsConfiguration cmdlet.
If the Native Client is not installed you will receive the error message "Cannot access WMI settings" when you call Move-CsRgsConfiguration.

The Move-CsRgsConfiguration cmdlet is only for migrating from Office Communications Server 2007 R2 or Lync Server 2010 to Skype for Business Server; you cannot use this cmdlet to migrate from one instance of Skype for Business Server to a new instance of Skype for Business Server.
That type of migration can only be done by using the new Import-CsRgsConfiguration and Export-CsRgsConfiguration cmdlets.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsRgsConfiguration -Source atl-ocsrgs-001.litwareinc.com -Destination redmond-lyncrgs-001.litwareinc.com
```

The command shown in Example 1 migrates the Response Group application from atl-ocsrgs-001.litwareinc.com to redmond-lyncrgs-001.litwareinc.com.


## PARAMETERS

### -Destination

FQDN of the computer where the Skype for Business Server Response Group application is to be hosted (the "copy to" location).



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source

FQDN of the pool where the Office Communications Server 2007 R2 or Lync Server 2010Response Group application is currently hosted (the "copy from" location).



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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

### -ResolveNameConflicts
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
Move-CsRgsConfiguration does not accept pipelined input.

## OUTPUTS

###  
Move-CsRgsConfiguration moves instances of the Microsoft.Rtc.Management.WritableSettings.ServiceSettings from one service to another.

## NOTES

## RELATED LINKS

[Get-CsRgsConfiguration](Get-CsRgsConfiguration.md)

[Move-CsRgsConfiguration](Move-CsRgsConfiguration.md)
