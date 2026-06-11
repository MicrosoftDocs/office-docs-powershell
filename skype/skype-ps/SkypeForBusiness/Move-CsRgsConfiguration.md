---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Rgs.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/move-csrgsconfiguration
schema: 2.0.0
title: Move-CsRgsConfiguration
---

# Move-CsRgsConfiguration

## SYNOPSIS
Enables you to migrate Response Group configuration settings from legacy version pool to newer version pool. For example, from Microsoft Office Communications Server 2007 R2 or Microsoft Lync Server 2010/2013 to Skype for Business Server 2015.
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

If you are currently running the Response Group application on legacy server, the Move-CsRgsConfiguration cmdlet provides a way for you to migrate this service to newer version server.
To migrate the service, you need to call the Move-CsRgsConfiguration cmdlet and specify: 1) the fully qualified domain name (FQDN) for the existing version of the Response Group application (the Source); and, 2) the FQDN for the new Skype for Business Server version of the service (the Destination).
Move-CsRgsConfiguration will then move all the configuration settings, audio files, and contact objects from the existing version (for example, Office Communications Server 2007 R2 or Lync Server 2010) to newer version.
After the service has been migrated, all calls to a Response Group phone number will be handled by the newer server.
Calls will no longer be handled by the previous version of the service.

>[!Note]
> If you are running this service on Office Communications Server 2007 R2 or Lync Server 2010, before you can run Move-CsRgsConfiguration, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi. The file OCSWMIBC.msi can be found on the installation DVD in the Setup folder.

>[!Note]
> If Office Communications Server 2007 is running Microsoft SQL Server 2005 then, before you attempt to migrate the Response Group application, you must install the Microsoft SQL Server 2005 Native Client on the computer where you will be running the Move-CsRgsConfiguration cmdlet.
If the Native Client is not installed you will receive the error message "Cannot access WMI settings" when you call Move-CsRgsConfiguration.

>[!Note]
> The Move-CsRgsConfiguration cmdlet is only for migrating from legacy version to newer version; you cannot use this cmdlet to migrate between the same version (for example, one instance of Skype for Business Server 2015 to a new instance of Skype for Business Server 2015).
That type of migration can only be done by using the new Import-CsRgsConfiguration and Export-CsRgsConfiguration cmdlets.

## EXAMPLES

### EXAMPLE 1
```
Move-CsRgsConfiguration -Source atl-ocsrgs-001.litwareinc.com -Destination redmond-lyncrgs-001.litwareinc.com
```

The command shown in Example 1 migrates the Response Group application from atl-ocsrgs-001.litwareinc.com to redmond-lyncrgs-001.litwareinc.com.


## PARAMETERS

### -Destination

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

FQDN of the computer where the newer server Response Group application is to be hosted (the "copy to" location).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResolveNameConflicts

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

When present, duplicate names will be resolved by appending a unique identifying number. For example, if there are two workflows named Help Desk Workflow one of the two will be renamed Help Desk Workflow (2).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

FQDN of the pool where the legacy Response Group application is currently hosted (the "copy from" location).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None
Move-CsRgsConfiguration does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.WritableSettings.ServiceSettings
Move-CsRgsConfiguration moves instances of the Microsoft.Rtc.Management.WritableSettings.ServiceSettings from one service to another.

## NOTES

## RELATED LINKS

[Get-CsRgsConfiguration](Get-CsRgsConfiguration.md)

[Move-CsRgsConfiguration](Move-CsRgsConfiguration.md)
