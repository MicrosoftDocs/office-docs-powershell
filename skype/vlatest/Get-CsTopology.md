---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTopology

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about your Microsoft Lync Server 2010 infrastructure, including internal domains, sites, clusters, computers, services, and back-end instances of SQL Server.

**Below Content Applies To:** Lync Server 2013

Returns information about your Lync Server infrastructure, including internal domains, sites, clusters, computers, services, and back-end instances of SQL Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about your Skype for Business Server 2015 infrastructure, including internal domains, sites, clusters, computers, services, and back-end instances of SQL Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsTopology [-AsXml] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Get-CsTopology cmdlet returns information about how Lync Server 2010 has been set up and configured.
Called without any additional parameters, the cmdlet provides an overview of your Lync Server infrastructure; in that scenario, the cmdlet gives you an overall view of such things as your domains, your sites, and the computers running Lync Server services and server roles.
Alternatively, you can pass the output of Get-CsTopology to the Select-Object cmdlet; this enables you to access detailed information about a portion of your topology.
For example, the following command provides detailed information regarding the SQL Server instances used by Lync Server:

Get-CsTopology | Select-Object -ExpandProperty SqlInstances

You can also use the AsXml parameter to return detailed information about your entire topology in XML format.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTopology cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.

**Below Content Applies To:** Lync Server 2013

The Get-CsTopology cmdlet returns information about how Lync Server has been set up and configured.
Called without any additional parameters, the cmdlet provides an overview of your Lync Server infrastructure; in that scenario, the cmdlet gives you an overall view of such things as your domains, your sites, and the computers running Lync Server services and server roles.
Alternatively, you can pass the output of Get-CsTopology to the Select-Object cmdlet; this enables you to access detailed information about a portion of your topology.
For example, the following command provides detailed information regarding the SQL Server instances used by Lync Server:

Get-CsTopology | Select-Object -ExpandProperty SqlInstances

You can also use the AsXml parameter to return detailed information about your entire topology in XML format.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTopology cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.

**Below Content Applies To:** Skype for Business Server 2015

The Get-CsTopology cmdlet returns information about how Skype for Business Server 2015 has been set up and configured.
Called without any additional parameters, the cmdlet provides an overview of your Skype for Business Server 2015 infrastructure; in that scenario, the cmdlet gives you an overall view of such things as your domains, your sites, and the computers running Skype for Business Server 2015 services and server roles.
Alternatively, you can pass the output of the Get-CsTopology cmdlet to the Select-Object cmdlet; this enables you to access detailed information about a portion of your topology.
For example, the following command provides detailed information regarding the SQL Server instances used by Skype for Business Server 2015:

Get-CsTopology | Select-Object -ExpandProperty SqlInstances

You can also use the AsXml parameter to return detailed information about your entire topology in XML format.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTopology
```

The preceding command returns complete details for your Lync Server topology.
This is done by calling Get-CsTopology without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns complete details for your Lync Server topology.
This is done by calling Get-CsTopology without any additional parameters.

Get-CsTopology

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns complete details for your Skype for Business Server 2015 topology.
This is done by calling the Get-CsTopology cmdlet without any additional parameters.

Get-CsTopology

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTopology | Select-Object -ExpandProperty Machines
```

Example 2 returns information about the computers found in your Lync Server topology.
To do this, the command first calls Get-CsTopology to return the complete Lync Server topology.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to extract and display detailed information for all the computers included in that topology.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information about the computers found in your Lync Server topology.
To do this, the command first calls Get-CsTopology to return the complete Lync Server topology.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to extract and display detailed information for all the computers included in that topology.

Get-CsTopology | Select-Object -ExpandProperty Machines

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information about the computers found in your Skype for Business Server 2015 topology.
To do this, the command first calls the Get-CsTopology cmdlet to return the complete Skype for Business Server 2015 topology.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to extract and display detailed information for all the computers included in that topology.

Get-CsTopology | Select-Object -ExpandProperty Machines

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTopology -AsXML | Out-File C:\Logs\Topology.xml
```

The command shown in Example 3 returns information about your Lync Server topology and then saves that information to an XML file.
To carry out this task, the command first calls Get-CsTopology, along with the AsXml parameter; that causes the data to be returned as formatted XML.
That formatted data is then piped to the Out-File cmdlet, which saves the information to the file C:\Logs\Topology.xml.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information about your Lync Server topology and then saves that information to an XML file.
To carry out this task, the command first calls Get-CsTopology, along with the AsXml parameter; that causes the data to be returned as formatted XML.
That formatted data is then piped to the Out-File cmdlet, which saves the information to the file C:\Logs\Topology.xml.

Get-CsTopology -AsXML | Out-File C:\Logs\Topology.xml

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information about your Skype for Business Server 2015 topology and then saves that information to an XML file.
To carry out this task, the command first calls the Get-CsTopology cmdlet, along with the AsXml parameter; that causes the data to be returned as formatted XML.
That formatted data is then piped to the Out-File cmdlet, which saves the information to the file C:\Logs\Topology.xml.

Get-CsTopology -AsXML | Out-File C:\Logs\Topology.xml

## PARAMETERS

### -AsXml
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Returns topology information in XML format.
By combining Get-CsTopology, the AsXml parameter, and the Out-File cmdlet, you can export your topology to an XML file.



**Below Content Applies To:** Skype for Business Server 2015

Returns topology information in XML format.
By combining the Get-CsTopology cmdlet, the AsXml parameter, and the Out-File cmdlet, you can export your topology to an XML file.



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

### -LocalStore
Retrieves the topology data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsTopology does not accept pipelined input.

###  
None.
The Get-CsTopology cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsTopology returns instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.

###  
The Get-CsTopology cmdlet returns instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ad52f545-b8dd-411e-8584-b6e29fe8ef18(OCS.14).aspx)

[Enable-CsTopology]()

[Publish-CsTopology]()

[Test-CsTopology]()

[Online Version](http://technet.microsoft.com/EN-US/library/ad52f545-b8dd-411e-8584-b6e29fe8ef18(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ad52f545-b8dd-411e-8584-b6e29fe8ef18(OCS.16).aspx)

