---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClsAgentStatus

## SYNOPSIS
Use the Get-CsClsAgentStatus to return information about the ClsAgent service on the local machine.

## SYNTAX

```
Get-CsClsAgentStatus [-CacheFileLocalFolders <String>] [-DefaultXml] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsClsAgentStatus cmdlet returns information about the ClsAgent, including version, service status, log storage details, and disk free space.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Returns information about the ClsAgent service on the local machine.

Get-CsClsAgentStatus

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Returns the default.xml file as an XmlDocument object.

Get-CsClsAgentStatus -DefaultXml

## PARAMETERS

### -CacheFileLocalFolders
Specifies the path to search for log files stored on disk.
By default the CacheFileLocalFolders path from the Get-CsClsConfiguration cmdlet is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultXml
If specified, the cmdlet will return the default.xml file as an XmlDocument object for debugging purposes.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
Returns a Microsoft.Rtc.Management.Cls.AgentInfo object, or an XmlDocument object if the DefaultXml parameter is used.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9bd15b0e-8f92-4ded-bbe6-0aa381d6e90d(OCS.16).aspx)

